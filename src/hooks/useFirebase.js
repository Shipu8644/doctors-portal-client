import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('Registration Successful, Welcome to Doctors Portal');
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser);
                //save user to the database
                saveUser(email, name, "POST");
                // Send name to firebase after Creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                navigate('/');

            })
            .catch((error) => {
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));

    }

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || "/"
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                //save user to the database
                saveUser(user.email, user.displayName, "PUT");

                const destination = location?.state?.from || "/"
                navigate(destination);
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    useEffect(() => {

        fetch(`https://afternoon-bayou-81687.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })

    }, [user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://afternoon-bayou-81687.herokuapp.com/users', {
            method: method,
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout

    }
}

export default useFirebase;