/* 
    1. Create firebase project in console.firebase.google.com

    2. npm install firebase

    3. create firebase.init.js and import getAuth to export auth

    4. firebase setting > authentication > enable email and password auth

    5. Create Login, SignUp components and setup route

    6. attach form field handler and form submit handler

    7. npm install --save react-firebase-hooks

    8. useCreateUserWithEmailAndPassword from react firebase hooks

    9. If user is created redirect to the expected page

    10. userSignInWithEmailAndPassword for login

    11. Create RequireAuth component => check user exist and tract user location

    12. In Route wrap protected component by using RequireAuth component

 */



/* 
    *hosting steps

    1. npm install -g firebase-tools (one time for your computer)
    2. firebase login (one time for your computer)
    3. firebase init (one time for each project)
    4. npm run build (every time you want to deploy)
    5. firebase deploy (every time you want to deploy)

 */