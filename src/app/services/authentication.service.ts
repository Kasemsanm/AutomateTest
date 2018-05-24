import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

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
    Observable.from(this.afAuth.authState)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
      return authenticated;      
    })
    return false
  }
}
