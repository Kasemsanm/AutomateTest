import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth';

export class TestItem {
  key: string;
  title: string;
  script: string;
  status: string;
}

export class ProjectItem {
  key: string;
  projectName: string;
  proportion: string;
  status: string;
}

@Injectable()
export class FirebaseService {

  uid: string;
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
  }

  GetProjects() {
    return this.db.list(this.uid + "/Porjects/").valueChanges();
  }

  AddNewProject(newProject: ProjectItem) {
    let ProjectRef$ = this.db.list(this.uid + "/Porjects/");
    return ProjectRef$.push(newProject).then(item => {
      newProject.key = item.key;
      ProjectRef$.update(item.key, newProject)
    });
  }

  GetUserID(){
    this.afAuth.authState.subscribe((val) => {
      this.uid = val.uid;
    })
  }

  RemoveProject(key:string){
    return this.db.list(this.uid + "/Porjects/").remove(key);
  }

  UpdateProject(key:string,newItem:ProjectItem){
    return this.db.list(this.uid + "/Porjects/").update(key,newItem);
  }

  GetTests(pid: string) {
    return this.db.list(this.uid + "/Porjects/" + pid + "/Tests/").valueChanges();
  }

  AddNewTest(pid: string, newTest: TestItem) {
    let TestRef$ = this.db.list(this.uid + "/Porjects/" + pid + "/Tests/");
    return TestRef$.push(newTest).then(item => {
      newTest.key = item.key;
      TestRef$.update(item.key, newTest)
    });
  }

  RemoveTest(pid: string, key:string){
    return this.db.list(this.uid + "/Porjects/" + pid + "/Tests/").remove(key);
  }

  UpdateTest(pid: string, key:string,newItem:ProjectItem){
    return this.db.list(this.uid + "/Porjects/" + pid + "/Tests/").update(key,newItem);
  }

}
