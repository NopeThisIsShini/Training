import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // to check if user is login or not , uid is a variable
  private uid?: string

  constructor() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid; //no need this extra line we can directly assin value to this.uid
        //update uid when user logged in
        this.uid  = user.uid
        console.log("user logged in as",user.email)
      } else {
        // when user logged out remove uid,
        this.uid = undefined
        console.log("User logged out")
      }
    });
  }

  //is user logged in show following (use in navbar)
  isAuthenticated(){
    return this.uid ? true : false
  }
  getUid(){
    return this.uid
  }
  //* Create new user  */
  registerUser(email: string, password: string) {


    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log({ user }) //just for show in console, optional
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
        const errorMessage = error.message;
        console.log(errorMessage)
        alert("Something went wrong while signup try again")
      });
  }
  //*login function*/
  loginUser(email: string, password: string) {


    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log({ user })
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        alert("Something went wrong while login try again")
      });
  }
  //*SignOut Fucntion */
  logout() {
    const auth = getAuth();
    
    signOut(auth).catch((error) => {
      alert("something went wrong while logout")
    });
  }
  


}
