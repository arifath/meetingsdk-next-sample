# Zoom Meeting SDK Expressjs & Nextjs sample

## Setup Backend

1. In terminal, run the following command to clone the repo:

   `$ git clone https://github.com/zoom/meetingsdk-auth-endpoint-sample.git`

1. In terminal, cd into the cloned repo:

   `$ cd meetingsdk-auth-endpoint-sample`

1. Then install the dependencies:

   `$ npm install`

1. Create an environment file to store your Meeting SDK credentials:

   `$ touch .env`

1. Add the following code to the `.env` file, and insert your [Zoom Meeting SDK credentials](https://developers.zoom.us/docs/meeting-sdk/developer-accounts/#get-meeting-sdk-credentials):

   ```
   ZOOM_MEETING_SDK_KEY=MEETING_SDK_KEY_HERE
   ZOOM_MEETING_SDK_SECRET=MEETING_SDK_SECRET_HERE
   ```

1. Save and close `.env`.

1. Start the server:

   `$ npm run start`

## Setup Frontend

1. In terminal, cd into the cloned repo:

   `$ cd meetingsdk-next-sample`

1. Then install the dependencies:

   `$ npm install`

1. Fill some variable in `./src/app/page.js`:

   ```
   const authEndpoint = "http://localhost:4000";
   const sdkKey = "";
   const meetingNumber = "";
   const passWord = "";
   const role = 0;
   const userName = "React";
   const userEmail = "";
   const registrantToken = "";
   const zakToken = "";
   var leaveUrl = "http://localhost:3000";

   ```

1. Start the server:

   `$ npm run dev`
