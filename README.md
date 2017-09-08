This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Installation
1. git clone https://github.com/SamuelOcampo/react-redux-firebase
2. cd react-redux-firebase

### Firebase credentials
1. Go to your firebase console https://console.firebase.google.com/ and select/create a project
2. Copy your project credentials https://firebase.google.com/docs/web/setup and replace them in /src/actions/firebase.js

### Firebase Authentication
1. Enable firebase Email/Password authentication method
2. Create a new user
3. Copy the User UID

### Firebase Databse
1. Replace the User UID in the data.json file located in /src/data and save
2. Import the json file to firebase

### Install and Start
1. npm install
2. npm start

A new window should appear with a login screen, go ahead and type the user and password you set for firebase.
You should be able to see the content, now try to change the role in our data.json and upload it again and see what happens! 

BTW I forgot a logout button! So you would have to delete your localStorage if you want to be logged out.


## Something Missing?
If you need help with this you can create an issue.

A tutorial with more screens coming soon.