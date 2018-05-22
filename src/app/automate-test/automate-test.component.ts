import { Component, OnInit } from '@angular/core';

declare var particlesJS;
declare var $;

@Component({
  selector: 'app-automate-test',
  templateUrl: './automate-test.component.html',
  styleUrls: ['./automate-test.component.css']
})
export class AutomateTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    particlesJS.load('AutomateTest', 'assets/javascript/particlesjs-AutomateTest.json');
    $("#Authen").modal({backdrop: 'static', keyboard: false});
  }

}
