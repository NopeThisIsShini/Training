import { Injectable } from '@angular/core';
import { doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { AuthService } from './auth.service';
import { Title } from '@angular/platform-browser';
import { Details } from '../../models/details';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  // declare variable db 
  private db?: any
  //inject authservie to access getUid
  constructor(private authService: AuthService) {
    this.db = getFirestore()
  }
  async CreateForm(details: Details) {


    try {

      //use this.db to access
      const docRef = await addDoc(collection(this.db, "userDetails"), {
        ...details,
        by: this.authService.getUid()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("error while fill up dettails")
    }
  }
  //firebase documentation code name Read Data
  //admin panel showing
  // async getAllData() {
  //   let result:any[] = []
  //   const querySnapshot = await getDocs(collection(this.db, "userDetails"));
  //   querySnapshot.forEach((doc) => {
  //     // console.log(`${doc.id} => ${doc.data()}`);
  //     result.push({id:doc.id,...doc.data()})
  //   });
  //   return result
  // }
  //fetch one details
  //   async getDetailsById(docId:any){
  //     const docRef = doc(this.db, "userDetails",docId );
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  //   return docSnap.data()
  // } else {
  //   // docSnap.data() will be undefined in this case
  //   console.log("No such user!");
  // }
  //   }
}
