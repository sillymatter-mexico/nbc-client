import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IconsModule} from './icons/icons.module';
import { LandingComponent } from './pages/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import {CollapseModule} from 'ngx-bootstrap';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import {GamePageComponent} from './pages/game-page/game-page.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    MenuComponent,
    SignUpComponent,
    SignUpComponent,
    GamePageComponent,
    SliderComponent

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    CollapseModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
