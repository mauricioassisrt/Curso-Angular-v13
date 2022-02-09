import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero.model";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*
    Lista vazia de heroes
   */
  heroes: Hero[] = [];
  /*
    Objeto que seto o hero ao clicar
   */
  selectHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit() {
    /*
    Ao inicializar o component ele carrega os heros
   */
    this.getHeroes();
  }

  /*
    Pega os heroes do service
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  /*
    Ao clicar em um hero no html atribui o mesmo ao objeto
   */
  onSelect(hero: Hero): void {
    this.messageService.add("Hero Component  !" + hero.id);
    this.selectHero = hero;
  }
}
