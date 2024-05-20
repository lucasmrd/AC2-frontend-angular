import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {

  constructor(private router:Router){}

  userForm!: FormGroup;
  formularioEnviado: boolean = false;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      funcao: new FormControl(''),
      senha: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
    }) 
  }

  get nome() {
    return this.userForm.get('nome')!;
  }

  get email() {
    return this.userForm.get('email')!;
  }

  get funcao() {
    return this.userForm.get('funcao')!;
  }

  get senha() {
    return this.userForm.get('senha')!;
  }

  salvar() {
    if (this.userForm.invalid) {
      return;
    }

    console.log(this.userForm.value);
    this.router.navigate(["/app/users"])
  }
}
