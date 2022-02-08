import {Injectable} from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  /*
    Return Lista de HEROS atráves do mock
   */
  getHeroes(): Observable<Hero[]> {
    //of converte para um observable, transforma o HEROES em um observable
    const heroes = of(HEROES);
    return heroes;
  }
}
