import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

//This marks the class as one that participates in the dependency injection system.
//Removing data access from components means you can change your mind about the implementation anytime, without touching any components. They don't know how the service works.
@Injectable({
  //When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it. Registering the provider in the @Injectable metadata also allows Angular to optimize an application by removing the service if it isn't used.
  providedIn: 'root',
})

export class HeroService {


  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {

    //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    const hero = HEROES.find(h => h.id === id)!;

    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  //This is an example of a typical service-in-service scenario in which you inject the MessageService into the HeroService which is injected into the HeroesComponent.
  constructor(private messageService: MessageService) { }

}