import { Component, OnInit } from '@angular/core';
import { Message } from "primeng/primeng";
import { Router } from "@angular/router";

import { LoginService } from "../login.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  private msgs : Message [] = [];
  private passwordMatch = false;
  private usernameAvailable = {};
  private emailAvailable = {};

  constructor(private service : LoginService,
  private router : Router) { }

  ngOnInit() {
  }

  createGrowMessage(detail,summary,severity){
    this.msgs = [];
    this.msgs.push({
      detail:detail,
      summary:summary,
      severity:severity
    });
  }

  checkPassword(senha,confirmaSenha){
    if(senha == confirmaSenha){
      this.passwordMatch = true;
    } else {
      this.passwordMatch = false;
    }
  }

  checkEmailAvailable(email){
    this.service.checkEmailAvailable(email).subscribe(response => {
      this.emailAvailable = response.json();
    });
  }

  checkUsernameAvailable(username){
    this.service.checkUsernameAvailable(username).subscribe(response => {
      this.usernameAvailable = response.json();
    });
  }

  registrar(usuario){
    usuario.repetirSenha = undefined;

    this.service.registrar(usuario).subscribe(response => {
      this.createGrowMessage('Seu usuário foi criado com sucesso!','OK','success');
      setTimeout(() => {
        this.router.navigate(['/login']);
      },2000)
    },
      erro => {
        this.createGrowMessage('Não foi posível registrar seu usuário','Erro','error');
      });
  }

}
