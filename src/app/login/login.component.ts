
import { User } from './../data-model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup ;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.createForm();
  }
  ngOnInit() {
  }
  createForm() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }


  validateUser(login: User): void {
    if (!login) { return; }
    this.loginService.validateUserAndLogin(login)
      .subscribe(
      );
  }
  onSubmit(login: User) {
    console.log(this.loginForm);
    this.validateUser(login);
  }
  }
