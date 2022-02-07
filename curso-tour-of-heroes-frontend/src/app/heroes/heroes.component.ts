import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero.model";
import {HEROES} from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  //setei atributos no objeto
  
  heroes = HEROES;
  selectHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectHero = hero;

  }
}
