# Installation Instructions

## Install Backend Dependencies
Navigate to the `server/` folder:

bash
Copy code
cd server
npm install

## Configuration

1. **Set up Google OAuth 2.0 for Gmail Authentication:**
   - Go to the Google Cloud Console.
   - Create a new project and enable OAuth 2.0 for your app.
   - Obtain your client ID and client secret.
   - Set up the redirect URI (e.g., `com.yourapp:/oauthredirect`).
   - Update the config object in `src/utils/auth.js` with your client ID, client secret, and redirect URI.

2. **Backend Configuration:**
   - The Node.js backend needs to be running locally or deployed to a cloud service.
   - Modify the backend's IMAP logic in `server.js` with necessary credentials for Gmail IMAP access.
   - Ensure the mobile app makes API requests to the correct backend URL.

## Running the Backend Server
Navigate to the `server/` folder and run the server:

bash
Copy code
node server.js
The backend will start on `http://localhost:5000` (by default).

## Running the Mobile App
Start the React Native development server:

bash
Copy code
npx react-native start
Run the app on your preferred platform (Android or iOS):

- **For Android:**
  ```
  npx react-native run-android
  ```

- **For iOS (requires macOS):**
  ```
  npx react-native run-ios
  ```
