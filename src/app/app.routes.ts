import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomateTestComponent } from './automate-test/automate-test.component';

export const router: Routes = [
    {path:"", component:AutomateTestComponent, pathMatch:"full"}
]
export const routes: ModuleWithProviders = RouterModule.forRoot(router);