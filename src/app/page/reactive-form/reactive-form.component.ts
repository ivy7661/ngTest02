import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import {FormsModule,ReactiveFormsModule,FormBuilder, Validators, FormGroup, MinLengthValidator, FormControl } from '@angular/forms';
import { AsyncPipe, NgIf } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { ForbiddenValidatorDirective } from '../../shared/forbidden-name.directive';
import { forbiddenNameValidator } from '../../shared/forbidden-name.directive';
import { UserService } from '../../@service/user.service';
import { interval, Observable, startWith, Subscription, tap } from 'rxjs';

interface IActor {
  name:string;
  role:string;
  skill:string;
}

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf,JsonPipe,ForbiddenValidatorDirective, AsyncPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {
  private userService = inject(UserService);
  private userSubscription!: Subscription;


  // public profileForm = this.fb.group({
  //   firstName:['',Validators.required],
  //   lastName:[''],
  //   address:this.fb.group({
  //     street:[''],
  //     city:['',Validators.required]
  //   })
  // });
  public actorForm:FormGroup = new FormGroup({})

  public actor:IActor={
    name:'',
    role:'',
    skill:''
  };

  constructor(private fb:FormBuilder) {

  };

  ngOnInit(): void {
    this.setFormRule();
  }

  public setFormRule(): void {
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

}
