import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {RewardsComponent} from './pages/rewards/rewards.component';
import {PrivacyComponent} from './pages/privacy/privacy.component';
import {BasesComponent} from './pages/bases/bases.component';
import {GameContainerComponent} from './pages/game-container/game-container.component';
import {PointsComponent} from './pages/points/points.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'registro', component: SignUpComponent },
  { path: 'premios', component: RewardsComponent },
  { path: 'privacidad', component: PrivacyComponent },
  { path: 'bases', component: BasesComponent },
  { path: 'juegos', component: GameContainerComponent, canActivate: [AuthGuard] },
  { path: 'puntos', component: PointsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'juegos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
