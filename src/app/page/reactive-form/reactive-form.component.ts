import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule,FormBuilder, Validators, FormGroup, MinLengthValidator, FormControl } from '@angular/forms';
import { NgIf } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { ForbiddenValidatorDirective } from '../../shared/forbidden-name.directive';
import { forbiddenNameValidator } from '../../shared/forbidden-name.directive';

interface Iactor {
  name:string;
  role:string;
  skill:string;
}

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf,JsonPipe,ForbiddenValidatorDirective],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit{

  // public profileForm = this.fb.group({
  //   firstName:['',Validators.required],
  //   lastName:[''],
  //   address:this.fb.group({
  //     street:[''],
  //     city:['',Validators.required]
  //   })
  // });
  public actorForm:FormGroup = new FormGroup({})

  public actor:Iactor={
    name:'',
    role:'',
    skill:''
  };

  constructor(private fb:FormBuilder) {
    
  };

  ngOnInit(): void {
    this.actorForm = new FormGroup({
      name: new FormControl(
        this.actor.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i),
      ]),
      role: new FormControl(this.actor.role),
      skill: new FormControl(this.actor.skill, Validators.required),
    });
  }

  get name() {
    return this.actorForm.get('name');
  }

  get skill() {
    return this.actorForm.get('skii');
  }
}
