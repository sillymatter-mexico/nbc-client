import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Menu, Triangle, X, Key, Eye, EyeOff } from 'angular-feather/icons';

const icons = {
  Menu,
  Triangle,
  X,
  Key,
  Eye,
  EyeOff
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
