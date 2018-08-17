# Yelp Clone

[Live Demo](https://yelpclone415.herokuapp.com/#/)

Yelp Clone is a website for finding businesses within a location. It uses Rails/PostgreSQL for the backend with React.js and Redux on the frontend.

## Features and Implementation 

* Frontend and Backend user authentication with BCrypt
* Users can search for a specific business or a business category from location.
* Users can give a review for a business and the rating.
* Businesses will dynamically update their average rating and results when there is a new review.
* Users can add photos of their experience with their business. 
* Google Maps API to display marker at business locations and route to a certain business if requested.

### Search and Query
Users are able to search for businesses through the business name, category, or just a location. All input fields within the search are optional and default for category would be all businesses and default for location would be San Francisco. If both fields are empty, businesses of all categories are displayed for the user.

![Search Query](https://preview.ibb.co/ixFmkz/Search_Query.png)

A challenge from the query is determining what the user puts and the defaults. The map component requires a certain geocoordinate to render on the page. The main container component will also render the results that are within the bounds of the map. To prevent the map from breaking, the default coordinate was a location within San Francisco. 

### Googe Maps
On the Google Map display, markers are rendered through the latitude and longitude of the data sent in from the database. A challenge from rendering all the markers of the location was during a refresh, the markers disappear because the markers were saved through the store.
The solution for this was to use the componentDidUpdate lifecycle function to tell the map that new props were passed and that it needs to be updated.

```
componentDidUpdate(prevProps) {
  if(this.props.placeMarkers) {
    if (this.props.placeMarkers.length !== prevProps.placeMarkers.length) {
      this.updateMap(this.props);
    }
  }
}
``` 

The snippet above enabled the map to re-render with the markers in place when the page changes.


### Future Improvements 

* Improve search query to display more accurate results
* Enable Users to see their profile page
* Split search results and reviews into multiple pages
