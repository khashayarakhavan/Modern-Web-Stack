import firebase from 'firebase/app'; // import firebase utility core library.
import 'firebase/firestore'; // automatically attaches to firebase keyword as methods.
import 'firebase/auth'; // attaches auth method to firebase core.

const { log } = console;
const config = { // your keys to access Firebase project.
  // copy the following data (js object) from your created project settings on firebase developers dashboard.
  apiKey: "AIzaSyCJzSTV0IWS7r_cgEJ1uzya2uH2MVyfJaM",
  authDomain: "shaja-267509.firebaseapp.com",
  databaseURL: "https://shaja-267509.firebaseio.com",
  projectId: "shaja-267509",
  storageBucket: "shaja-267509.appspot.com",
  messagingSenderId: "413253657609",
  appId: "1:413253657609:web:d86c050f91983b793dc4d8",
  measurementId: "G-CC4FG5NYHV",
};

// DEV:test mock database.
// const config = {
//   apiKey: "AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14",
//   authDomain: "crwn-db.firebaseapp.com",
//   databaseURL: "https://crwn-db.firebaseio.com",
//   projectId: "crwn-db",
//   storageBucket: "crwn-db.appspot.com",
//   messagingSenderId: "850995411664",
//   appId: "1:850995411664:web:7ddc01d597846f65",
// };

firebase.initializeApp(config); // initialise firebase using the config option

// Main function to find user id and save it into our database on firestore -->
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // There is no user; exit.

  const userRef = firestore.doc(`users/${userAuth.uid}`); // find user inside users collection using its id called 'uid'

  const snapShot = await userRef.get(); // get method is a persisted snapshot of the user's current state from DB.
  log('This is the receieved snapShot of the user before signing in from fireStore DB :D ...', snapShot);

  userRef.onSnapshot(snap => { // use onSnapShot method to access the snapshot whenever it changes due to write or update 'CRUD Operations'.
    log('This is the actual document data from a refreshed snapShot :D ...', snap.data());
  });

  if (!snapShot.exists) { // check if the 'exists' property of the received snapshot to check whether the user exists or no.
    const { displayName, email, phoneNumber, photoURL } = userAuth; // destructure the needed properties from received user object.
    const createdAt = new Date(); // add the timestamp.
    try {
      await userRef.set({ // write in the DB the desired data using 'set' method.
        displayName,
        email,
        phoneNumber,
        oAuthPhoto: photoURL,
        createdAt,
        ...additionalData // save the extra data if sent as argument.
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// Main function to add collections or documents to firebase database `Firestore`.
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch(); // access to batch object anywhere else to do multiple operations at a time.
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(); // create a new document inside the collection and assign an autogenerated id to each document.
    // if you insert values inside `.doc()` it will be set as id of the document.
    console.log('New data is waiting to be added in this directory on Firestore.', newDocRef);
    batch.set(newDocRef, obj); // defining the action we want to be done for each of the documents.
  });

  return await batch.commit(); // actually do multiple actions at a time.
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// Main function that synchronises the userAuth object from Firebase to our app. 
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => { // attach an auth listener to our app which returns the user object when it changes. 
      log('This is the received object from Firebase authentication. Here we go :D ',userAuth); // log received userAuth object from firebase after authentication.
      unsubscribe(); // calling the unsubscribe function again will close the synchronous connection between our app and firebase authenticator.
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth(); // export anything related to authentication from firebase as a function. import it anywhere needed in the app.
export const firestore = firebase.firestore(); // export anything related to firebase database called 'fireStore' from firebase as a function. import it anywhere needed in the app.

export const googleProvider = new firebase.auth.GoogleAuthProvider(); // define a new oAuth provider using Google 
googleProvider.setCustomParameters({ prompt: 'select_account' }); // set options for the prodiver to change the flow of oAuth. here we want it to always pop-up and select the google account.

// Main function authenticatation request to firebase -->
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider); // define a function using signIn method and 'googleProvider' as the provider option sent to firebase. 
// here is where the main request to firebase is defined and sent in order to authenticate the user with a strategy such as google,twitter,facebook,etc. 
// <-- Firebase authentication methods such as Google,Facebook,Github,Phone.

export default firebase; // default function will be the main firebase library in case we need it in app.
