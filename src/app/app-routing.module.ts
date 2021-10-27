import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './cards/cards.component';
import { ChildComponent } from './child/child.component';
import { RegistrationReactiveValidationComponent } from './registration-reactive-validation/registration-reactive-validation.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationReactiveValidationComponent
  },
  {
    path: 'register',
    component: RegistrationReactiveValidationComponent
  },
  {
    path: 'child',
    component: ChildComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
