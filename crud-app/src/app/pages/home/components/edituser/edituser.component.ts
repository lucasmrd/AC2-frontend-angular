import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  userForm: FormGroup;
  formularioEnviado: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    this.userForm = this.buildFormClient();
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  private loadUserData(): void {
    // Defina os dados do usuário de exemplo aqui
    const userData = {
      nome: 'Lucas',
      email: 'lucas@gmail.com',
      funcao: 'Engenheiro FE',
      senha: '123456' // Use uma senha padrão ou deixe vazio
    };
    this.userForm.setValue(userData);
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

  salvar(): void {
    this.formularioEnviado = true;

    if (this.userForm.invalid) {
      return;
    }

    console.log(this.userForm.value);
    this.router.navigate(['/app/users']);
  }

  private buildFormClient(): FormGroup {
    return this.fb.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      funcao: [null, Validators.required],
      senha: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }
}