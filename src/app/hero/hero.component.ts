import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService,Hero } from '../hero.service';
import { HttpClient } from '@angular/common/http';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  heroList:[]=[];

  constructor(private heroService: HeroService,private http:HttpClient,public counterService:CounterService) { }

  ngOnInit(): void {
    // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    this.http.get<[]>('assets/hero.json').subscribe(data=>{
      this.heroList=data;
    })
  }
}
