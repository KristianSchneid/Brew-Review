import app from 'firebase/app';

const config = {
    apiKey: 'AIzaSyARv0otUFM0NYGf8i4ydTp_vKadfQmTq48',
    authDomain: 'brew-review-f414f.firebaseapp.com',
    databaseURL: 'https://brew-review-f414f.firebaseio.com',
    projectId: 'brew-review-f414f',
    storageBucket: 'brew-review-f414f.appspot.com',
    messagingSenderId: '115153211232',
};

const config =
    process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;