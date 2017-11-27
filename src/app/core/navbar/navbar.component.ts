import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../login/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service : LoginService,
  private router : Router) { }

  ngOnInit() {
  }

  loggedIn(){
    return this.service.isLoggedIn();
  }

  logout(){
    this.service.logOut();
    this.router.navigate['login'];
  }
}
