import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

const FrontendHost =
  process.env.NODE_ENV === "production"?
  "https://medy-firebase-sample.web.app":
  "http://localhost:3000";

const setCors=(response:functions.Response)=>{
  // CORS用にAccess-Control-Allow系ヘッダを追加
  // localhostを許可
  response.set("Access-Control-Allow-Origin", FrontendHost);
  // DELETEだけは拒否
  response.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST");
  // Content-Typeのみを許可
  response.set("Access-Control-Allow-Headers", "Content-Type");
};

export const helloWorld = functions.https.onRequest((request, response) => {
  setCors(response);
  console.log(response)
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
