import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  @ViewChild('form', { static: true }) form!: NgForm;
  
  userForm = {
    username: '',
    password: ''
  };


  user: any = {
    username: '',
    password: '',
  };


  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log('Login effettuato', this.form);
    this.user.username = this.form.value.userInfo.username;
    this.user.password = this.form.value.userInfo.password;
    console.log(this.user)
  }

}
