import {Injectable} from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero.model";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {
  }

  /*
    Return Lista de HEROS atráves do mock
   */
  getHeroes(): Observable<Hero[]> {
    //of converte para um observable, transforma o HEROES em um observable
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

}
