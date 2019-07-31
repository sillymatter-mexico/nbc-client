import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IconsModule} from './icons/icons.module';
import { LandingComponent } from './pages/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import {CollapseModule, ModalModule} from 'ngx-bootstrap';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { RewardsComponent } from './pages/rewards/rewards.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TextWallComponent } from './components/text-wall/text-wall.component';
import { NgxMdModule } from 'ngx-md';
import { BasesComponent } from './pages/bases/bases.component';
import { GameContainerComponent } from './pages/game-container/game-container.component';
import { PointsComponent } from './pages/points/points.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {ServerHttpInterceptor} from './interceptors/server.interceptor';
import {AuthHttpInterceptor} from './interceptors/auth.interceptor';
import {ToastrModule} from 'ngx-toastr';
import {UserService} from './services/user.service';
import {AuthGuard} from './guards/auth.guard';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import { CompletedModalComponent } from './components/completed-modal/completed-modal.component';

export function onInit(userService: UserService) {
  return () => userService.getSavedSession();
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    MenuComponent,
    SignUpComponent,
    SignUpComponent,
    SliderComponent,
    FooterComponent,
    RewardsComponent,
    PrivacyComponent,
    TextWallComponent,
    BasesComponent,
    GameContainerComponent,
    PointsComponent,
    CompletedModalComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    NgxMdModule.forRoot(),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.5)',
      primaryColour: '#C71652',
      secondaryColour: '#EE263F',
      tertiaryColour: '#EF5E24'
    })
  ],
  entryComponents: [
    CompletedModalComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: onInit,
      deps: [UserService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerHttpInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
