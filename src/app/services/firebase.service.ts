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
    afAuth.authState.subscribe((val) => {
      this.uid = val.uid;
    })
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

  RemoveProject(key:string){
    return this.db.list(this.uid + "/Porjects/").remove(key);
  }

  UpdateProject(key:string,newItem:ProjectItem){
    return this.db.list(this.uid + "/Porjects/").update(key,newItem);
  }

  GetTests(pid: string) {
    return this.db.list(this.uid + "/Porjects/" + pid + "/Tests/")
  }

  AddNewTest(pid: string, newTest: TestItem) {
    return this.db.list(this.uid + "/Porjects/" + pid + "/Tests/").push(newTest);
  }

}
