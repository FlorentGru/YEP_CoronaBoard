import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyCnJ7DcU8zVocYCn2T_nXN0ddh6m44Qf_0",
    authDomain: "vue-js-tutorial-d2c05.firebaseapp.com",
    databaseURL: "https://vue-js-tutorial-d2c05.firebaseio.com",
    projectId: "vue-js-tutorial-d2c05",
    storageBucket: "vue-js-tutorial-d2c05.appspot.com",
    messagingSenderId: "386447691347",
    appId: "1:386447691347:web:f092bd6d14bc1c6b2640a6",
    measurementId: "G-MEQ9YYV1XK"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = { timestampsInSnapshots: true }
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}
