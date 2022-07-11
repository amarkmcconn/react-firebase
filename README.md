# _Help Ticket Queue_

#### By _**Mark McConnell**_

#### _This is a React-Redux application for a help ticket queue that has backend integration with firebase_

## 🖥️ Technologies Used

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" height="60"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height="60"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" height="60"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="60"/>

## ✅ Description

_This is a React-Redux application for a help ticket queue that has backend integration with firebase. This application has full crud functionality for all users._

## ⚙️Setup/Installation Requirements

`Step 1 : Set Up A Firebase Account`

    Start by navigating to Firebase in the browser.

    Click on Get Started. This will take us to a sign in page where can log into a Google account (or create one if needed).
`Step 2 : Create a Firebase Project`

    Click on Create a Project. (If we need to access the console and are logged in, there is a Go to Console link at the upper right corner of the page.)
    
    When we click Create a Project, we'll be taken to a page where we can name our project.
`Step 3: Set Up Firestore`

    Once our project has been generated, click on Firestore Database in the lefthand Build pane

    Click on the Create database button (which is circled in the image above). A popup will appear

    Click on Start in Test Mode. On the next popup, click Enable. Then, we'll wait as Firebase creates up the database.

`Step 4: Add Firebase to Our Web App`

    Next, we need to add Firebase to our Help Queue application. We can do so by clicking on the following button on the Project Overview page

    Once we click on the button marked </>, we'll be taken to a page that reads Add Firebase to your web app.

    Click on Continue to console.

    If you need to access the firebaseConfig later, you can do so by clicking on the gear icon to the right of Project Overview in the upper-left corner of the screen. Then click on Project settings, which will take you to a page which includes the script. 

`Step 5: Set Up Read/Write Rules`

    ```
    // Note that these rules are not secure and should NEVER be used in production!
      rules_version = '2';
      service cloud.firestore {
        match /databases/{database}/documents {
          match /{document=**} {
            allow read, write: if true;
          }
        }
      }
      ```
We will also need to .env file to our project directory, as we want to protect our configuration from potentially malicious users.

Our .env file with include the following:
```
REACT_APP_FIREBASE_API_KEY = "YOUR-UNIQUE-CREDENTIALS"
REACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR-PROJECT-NAME.firebaseapp.com"
REACT_APP_FIREBASE_DATABASE_URL = "https://YOUR-PROJECT-NAME.firebaseio.com"
REACT_APP_FIREBASE_PROJECT_ID = "YOUR-PROJECT-FIREBASE-PROJECT-ID"
REACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR-PROJECT-NAME.appspot.com"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "YOUR-PROJECT-SENDER-ID"
REACT_APP_FIREBASE_APP_ID = "YOUR-PROJECT-APP-ID"
```
You will then need to add .env to your .gitignore file and process a commit to protect your secret keys.

Clone this repository: https://github.com/amarkmcconn/react-firebase

In the project directory `REDUX-HELP-QUEUE` you can run:

1. ### `npm install`

2. ### `npm start`

    * Runs the app in the development mode.
    * Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
    * The page will reload when you make changes.
    * You may also see any lint errors in the console.

3. ### `npm run build`

    * Builds the app for production to the `build` folder.
    * It correctly bundles React in production mode and optimizes the build for the best performance.
    * The build is minified and the filenames include the hashes.
    * Your app is ready to be deployed!

4. ### `npm run eject`

        **Note: this is a one-way operation. Once you `eject`, you can't go back!**
    * If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
    * Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
    * You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.This is a great place_

## Known 🐛 Bugs

* _No Known Issues_

## 🎫License

[MIT](LICENSE) 👈

_If you run into any issues or have questions, ideas, or concerns;  please email me: at mark.programming1@gmail.com or make a contribution to the code._

Copyright (c) 2022 Mark McConnell
