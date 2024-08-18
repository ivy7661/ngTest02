import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import {FormsModule,ReactiveFormsModule,FormBuilder, Validators, FormGroup, MinLengthValidator, FormControl } from '@angular/forms';
import { AsyncPipe, NgIf } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { ForbiddenValidatorDirective } from '../../shared/forbidden-name.directive';
import { forbiddenNameValidator } from '../../shared/forbidden-name.directive';
import { UserService } from '../../@service/user.service';
import { interval, Observable, startWith, Subscription, tap } from 'rxjs';

interface Iactor {
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
export class ReactiveFormComponent implements OnInit, OnDestroy{
  private userService = inject(UserService);
  private userSubscription!: Subscription;
  public counter$!: Observable<number>;
  public newName!: string;
  public counter = signal(1);

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

    this.userSubscription = this.userService.userName$.subscribe(res => {
      this.newName = res;
    })

    let observable = interval(1000);

    this.counter$ = observable.pipe(
      tap((i) => console.log('counter = ', i)),
      startWith(0),
    );

    this.counter.set(99);
  }

  ngOnDestroy(): void {
    console.log(this.userSubscription.closed);
  }

  get name() {
    return this.actorForm.get('name');
  }

  get skill() {
    return this.actorForm.get('skii');
  }

  public updateCount() {
    this.counter.update(cur => cur+1)
  }
}
