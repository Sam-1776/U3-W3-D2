import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      userInfo: this.fb.group({
        nome: this.fb.control(null, [Validators.required]),
        cognome: this.fb.control(null, [Validators.required]),
        password: this.fb.control(null, [Validators.required]),
        password2: this.fb.control(null, [Validators.required]),
        username: this.fb.control(null, [Validators.required]),
        genere: this.fb.control(''),
        img: this.fb.control(''),
        bio: this.fb.control(' ')
      })
    })
  }

  geterrorsC(name: string, error: string) {
    return this.form.get(name)?.errors![error];
  }

  getFormC(nome: string) {
    return this.form.get(nome);
  }


  submit() {
    console.log(this.form.value.userInfo);
    console.log('Form corretto inviato');    
    this.form.reset();
  }

}
