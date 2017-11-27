import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";
import { Router } from "@angular/router";
import { Message } from "primeng/primeng";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  private msgs : Message [] =[];

  constructor(private service: LoginService,
  private router : Router) { }

  ngOnInit() {
  }

  login(usuario){
    this.service.login(usuario).then(()=>{
      this.router.navigate(['home']);
    })
    .catch(error => {
      this.createGrowMessage('Usuário ou senha invalida','Erro','error');
    });
  }

  createGrowMessage(detail,summary,severity){
    this.msgs = [];
    this.msgs.push({
      detail:detail,
      summary:summary,
      severity:severity
    });
  }
}
