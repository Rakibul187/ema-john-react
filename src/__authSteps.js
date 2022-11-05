/* 
======auth setup=====
1. create firebase projects
2. enable web
3. enable sign in method
4. install firebase
5. set firebase config in your firebaseConfig.js file on src
6. export app from firebaseConfig.js
*/

/* 
1. create UserContext ( auth context ): UserContext is a component, UserContext provide authContext
2. create AuthCOntext
3. set AuthContext.Provider
4. make sure you set the children
5. export AuthContext to be use inside useContext(AuthContext)
6. get form data
7. getAuth in the UserContext
*/

/* 
firebase hosting
===========================
// one time for each computer
1. npm install -g firebase-tools
2. firebase login

//for each project
1. firebase init
2. make sure for public directory you select : build
3. single page application ? y
4. github : yes or no select what you want

// for every deploy
1. npm run build
2. firebase deploy

// for update
1. npm run build
2. firebase deploy

find the link on firebase hosting dashbord
*/