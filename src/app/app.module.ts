import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routes'


import { AppComponent } from './app.component';
import { AutomateTestComponent } from './automate-test/automate-test.component';


@NgModule({
  declarations: [
    AppComponent,
    AutomateTestComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
