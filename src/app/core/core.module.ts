import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CoreRoutingModule } from "./core.routing";

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [NavbarComponent, HomeComponent],
  exports : [NavbarComponent]
})
export class CoreModule { }
