import initializeAuthentication from "../../../FirebaseConfic/FirebaseInit";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged,} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const singInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
    .then((result) => {
      setUser(result.user);
      console.log(result.user);
    });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {});
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return {
    user,
    singInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
