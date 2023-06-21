# TectoSlide
## Elevator Pitch
Do you remember a time when you saw an amazing geology feature and told yourself I better remeber this place, but then forgot it, or imagine you are on a road trip and want to see some amazing geological sites, but don't know where any are? TectoSlide allows you to create a marker on a map that represents the location of a geologic feature and a brief description that you can access whenever. That location is then visible to all others users on the website. At each marker created you can name it, write noticible features, and leave other notes for yourself or others. 

## Design
### Login Page:
![Mock](tecto1.jpg)
### Main Page:
![Mock](tecto2.jpg)
### View Data Page:
![Mock](tecto3.jpg)


## Key features
+ Secure login over HTTPS
+ Up to date Map
+ Ability to view all the data inputed
+ Ability to see all markers created
+ Store geologic data relevent to the area
+ Create and label markers in any location

## Technologies
+ **HTML**- HTML is used to create the structure for the site. There will be three HTML pages overall. One page will be for the login. One page will be for displaying the map and adding markers and this will contain a hyperlink to second page which will be a database of all the markers that has been added recently. 
+ **CSS**- This will be used to style the page, so that it is appealing to use to the user.
+ **JavaScript**- This will provide the login, create the marker button and allower use to input data, displaying the marker, and displaying previous markers.
+ **Service**- Backend Service will Include:
  * Using Google Maps API
  * login
  * submitting created markers
+ **Database**- Will store the users, the data given from the marker which include, a created name, a geological feature desciption, other general notes, and the location of the set marker.
+ **Login**- This registers and login users. It will be securally stored in a data base. You can't get access to the map until you login.
+ **WebSocket**- Will include weather services to help the user view the current temperature and weather conditions for the day. 
+ **React**- This will allow for the site to use the react web framework. 

## HTML Deliverables
For this deliverable I added the application structure.
+ **HTML pages**- I created four HTML Pages that represent login, map view, the ability for the user to create a marker, and the database visual.
+ **Links**- The login page links to the map page. The map page links to the marker page. The marker page temperarily links to the data page to display all the data inputed. 
+ **Image**- picture of a map on the map page
+ **Text**- Includes The Labels and Titles for each of the functions. The table contains temporary data to show the data that would be added from a marker. 
+ **Login**- Input box and submit box for login. 
+ **Database**- The Marker infor expamples is displayed in a table on the database page. 
+ **WebSocket**- Created a tempory Websocket holder displayed as Weather (in text form) to show where the WebSocket will be. 

## CSS Deliverables
+ **Header, footer, and main content body**- Inputed a Header menu and footer and main content body all with working links for each of the pages. 
+ **Navigation elements**- Edited the text so that underlines don't appear on text and changed color of the text and created a header bar. 
+ **Responsive to window resizing**- Fixed windows so it looks good on all devices and any size.
+ **Application elments**- Made sure there was spacing and that it was centered on the page. 
+ **Application text content**- Consistent fonts, edited size as needed. 
+ **Application images**- Added background images to the background for style. Map Image on the map page is a place holder for an interactive map. I did center the picture. 

## JavaScript deliverable
For this deliverable I made my application track and display the user and their comments. 
+ **login**- Tracks the User's given Username and takes you to the map page.
+ **database**- Displays User's info given of the geologic data on the alldata page. It is being stored on the local storage, but eventually it will be replaced with the database data.
+ **WebSocket**- Created a seperate websocket JS where it uses setIterval to Iterate through a list of different weather. This demonstrates it updating the future weather websocket.
+ **application logic**- There is a place holder for the Google API where a location will be taken and then added to the info of the user. It allows for user input and keeps track of the data. 

## Service Deliverable
For this deliverable I created an HTTP service to host my frontend and provide backend endpoints. 
+ **Node.js/Express HTTP service**- done! As seen in the newly created folders.
+ **Static middleware for frontend**- done! Can run through local host and corresponding port.
+ **Calls to third party endpoints**- Does this through Google map API and through quotes on the about page.
+ **Backend service endpoints**- Placeholders for login that stores the current user on the server.
+ **Frontend calls service endpoints**- Did this through the fetch function. 

## Data
for this deliverable I stored and retrieved data from MongoDB.
+ **MongoDB Atlas database created** - done!
+ **Endpoints for data** - The endpoints now process data from the user and send it to Mongo.
+ **Stores data in MongoDB** -done!

## Login deliverable
For this deliverable I added user registration adn authentication.
+ **User registration** - Creates a new account in the database
+ **Existing User** - Checks to see if a user's name and password are in the database currently
+ **Use MongoDB** - done!
+ **Restricts functionality** - You cannot continue until you have logged in since you can not be redirected to another page otherwise. 

## WebSocket deliverable
+ **Backend listens for WebSocket connection** - done!
+ **Frontend makes WebSocket connection** - done!
+ **Data sent over WebSocket connection** - done!
+ **WebSocket data displayed** - All users can access a chat through the map page bottom left corner and communicate to other users on the chat 

## React deliverable
For this deliverable I attempted to convert my application over to react. I was not successful in completing it, but I was able to display all of my pages, only not all of the features worked and I couldn't deploy it to my website, so I am adding screen shots from my development site

+ **Vundled and transpiled** - It was bundled and transpiled to the best of my ability
+ **Components** - Login is functioning, I fixed my earlier mistakes. 
+ **Router** - The websites were routing between one another. 
+ **Hooks** - only partially. I was successfull in gathering and seting the data, however I could not display it and retrieve it from the data base. 