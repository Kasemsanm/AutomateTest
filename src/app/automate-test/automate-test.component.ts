import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { NgForm } from '@angular/forms';
import { FirebaseService, TestItem, ProjectItem } from '../services/firebase.service';

declare var particlesJS;
declare var $;

@Component({
  selector: 'app-automate-test',
  templateUrl: './automate-test.component.html',
  styleUrls: ['./automate-test.component.css']
})
export class AutomateTestComponent implements OnInit {

  constructor(private Auth: AuthenticationService, private fdb: FirebaseService) { }
  error: string;
  AddTestError: string;
  pid: string;
  selectItem: boolean = false;
  Projects: any;
  projectName: string;
  ngOnInit() {
    $("#Projects").hide();
    this.Auth.Authenticated().subscribe(val => {
      if (val) {
        $("#Projects").show();
        this.GetProject();
      } else if (this.Auth.Authenticated()) {
        $("#Authen").modal({ backdrop: 'static', keyboard: false });
      }
    })
    particlesJS.load('AutomateTest', 'assets/javascript/particlesjs-AutomateTest.json');
  }

  Singin(Data: NgForm) {
    try {
      this.Auth.Singin(Data.value["Email"], Data.value["Password"]).then(
        (success) => {
          $("#Authen").modal('hide');
          $("#Projects").show();
          this.GetProject();
        }).catch(
        (err) => {
          this.error = err;
        }
        )
    } catch{

    }
  }

  SingOut() {
    this.Auth.Singout().then(
      (success) => {
        $("#Authen").modal({ backdrop: 'static', keyboard: false });
      }).catch(
      (err) => {
        this.AddTestError = err;
      });
  }

  AddNewTest(newTestForm: NgForm) {
    let newTest: TestItem = new TestItem();
    newTest.title = newTestForm.value["Title"];
    newTest.script = newTestForm.value["Script"];
    newTest.status = "Not Tested";
    try {
      this.fdb.AddNewTest(this.pid, newTest)
      $("#AddTest").modal("hide");
    } catch (err) {
      console.log(err);
    }
  }

  AddNewProject(newProjectForm: NgForm) {
    if (this.projectName != "") {
      let newProject = new ProjectItem();
      newProject.projectName = newProjectForm.value["projectName"];
      newProject.proportion = "0/0";
      newProject.status = "Not completed";
      try {
        this.fdb.AddNewProject(newProject)
        $("#AddProject").modal("hide");
        this.projectName = "";
      } catch (err) {
        console.log(err);
      }
    }
    else{

    }
  }

  GetProject() {
    this.Projects = this.fdb.GetProjects();
  }

  AddItem() {
    if (this.selectItem) {
      $("#AddTest").modal({ backdrop: 'static', keyboard: false });
    } else {
      $("#AddProject").modal({ backdrop: 'static', keyboard: false });
    }
  }

  RecoverPass() {
    $("#RecoverPassword").modal({ backdrop: 'static', keyboard: false });
  }

  BlackToSingin() {
    $("#RecoverPassword").modal('hide');
  }
}
