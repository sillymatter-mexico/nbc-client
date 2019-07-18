import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IconsModule} from './icons/icons.module';
import { LandingComponent } from './pages/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import {CollapseModule} from 'ngx-bootstrap';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import {GamePageComponent} from './pages/game-page/game-page.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    MenuComponent,
    SignUpComponent,
    SignUpComponent,
    GamePageComponent,
    SliderComponent,
    FooterComponent,
    RewardsComponent,
    PrivacyComponent,
    TextWallComponent,
    BasesComponent,
    GameContainerComponent,
    PointsComponent
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
    NgxMdModule.forRoot()
  ],
  providers: [
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
