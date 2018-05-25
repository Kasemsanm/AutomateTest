import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthenticationService {

  constructor(private afAuth:AngularFireAuth) { }

  Singin(Email:string, Password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(Email.toString(),Password.toString());
  }

  Singout(){
    return this.afAuth.auth.signOut();
  }

  RecoverPassword(Email:string){
    return this.afAuth.auth.sendPasswordResetEmail(Email.toString());
  }

  Authenticated(){
    return this.afAuth.authState;
  }
}
