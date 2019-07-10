import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {GamePageComponent} from './pages/game-page/game-page.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'registro', component: SignUpComponent },
  { path: 'game', component: GamePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
