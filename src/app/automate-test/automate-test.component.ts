import { Component, OnInit } from '@angular/core';
import 'assets/vendor/particles.js/particles.min.js'

declare var particlesJS;

@Component({
  selector: 'app-automate-test',
  templateUrl: './automate-test.component.html',
  styleUrls: ['./automate-test.component.css']
})
export class AutomateTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    particlesJS.load('AutomateTest', 'assets/javascript/particlesjs-AutomateTest.json');
  }

}
