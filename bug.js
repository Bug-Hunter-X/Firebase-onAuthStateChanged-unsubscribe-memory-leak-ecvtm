const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/user-properties
    console.log("User is signed in:", user);
  } else {
    // User is signed out
    // ...
    console.log("User is signed out");
  };
});

// unsubscribe from the listener when the component unmounts to prevent memory leak
useEffect(() => {
  return () => {
    unsubscribe();
  };
}, []);