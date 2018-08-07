class User < ApplicationRecord

  validates :fname,:lname,:zipCode,:password_digest, presence:true
  validates :password, length: {minimum:6, allow_nil:true}
  validates :email, :session_token, uniqueness:true, presence:true

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(username,password)
    @user = User.find_by(username:username)
    return nil if @user.nil?
    if @user.is_password?(password)
      return @user
    else
      return nil
    end
  end

  def password=(password)
    @password=password
    self.password_digest=BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    generate_session_token
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    generate_session_token unless self.session_token
  end

  def generate_session_token
    self.session_token = SecureRandom.urlsafe_base64
    while User.find_by(session_token: self.session_token)
      self.session_token=SecureRandom.urlsafe_base64
    end
    self.session_token
  end
  
end
