import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC_j7F7QQfLdpUdt03_7u3Z6SkycqOhcNA",
    authDomain: "goalcoach-5e369.firebaseapp.com",
    databaseURL: "https://goalcoach-5e369.firebaseio.com",
    projectId: "goalcoach-5e369",
    storageBucket: "goalcoach-5e369.appspot.com",
    messagingSenderId: "388763912141"
  };

export const firebaseApp = firebase.initializeApp(config);

export const goalRef = firebase.database().ref('goals');

export const completeGoalRef = firebase.database().ref('completeGoals');
