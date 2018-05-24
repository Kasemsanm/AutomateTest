import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseService {

  uid:string;
  constructor(private db:AngularFireDatabase, private afAuth:AngularFireAuth) {
      afAuth.authState.subscribe((val) => {
        this.uid = val.uid;
      })
  }

  GetTests(){
    return this.db.list(this.uid + "/Tests/")
  }

}
