# Reviewary
Leave a virtual you to guide strangers 
<br/>
<img src="https://user-images.githubusercontent.com/70591959/151982354-c78c8bc0-1b76-448f-a838-73318591dfb8.png" alt="drawing" height="200"/>
<br/>
## Inspiration
When looking into Mapillary to familiarize ourself with it, we think Mapillary is such a cool project that users can capture places with a camera, then upload to Mapillary. We want these users to get to know each other too, since they are such great contributors to the project. Rather than just navigating around or uploading street view to Mapillary, we can enable users to leave their thoughts about the place they visited. These thoughts can be a guidance or a review that can be helpful for other users when they visit the same place.
## What it does
The app allows user to explore places and leave a thoughts that can guide the next person. A 3D character is rendered to describe the thoughts and placed on the street.
## How we built it
We use React.js for the most part, alongside with Mapillary.js and MapBox GL for longitude and latitude detection. Three.js is used to render 3D characters and user data is attached to each of them.
## Challenges we ran into
We weren't sure whether we're able to implement this application, so we spent lots of time researching into it. It's feasible! Until the last day of the hackathon, we met up with Mapillary mantainers and received some guidance from them.
## Accomplishments that we're proud of
We're able to finish the most of the application that we planned to have in the beginning.
## What we learned
We learned a lot more about Mapillary, the OSS project that we'll be working on in the next few weeks. 
## What's next for Reviewary
There are a lot of things we want to do for Reviewary. A backend server can be integrated to persist user data and authenticate/authorize users. Instead of assigning user a starting point, we want to give users the flexibility to chose a starting point on the map. 3D characters are heavy in general, so optimization is needed to boost up the application.
<br/> 
# Technical stuff
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
