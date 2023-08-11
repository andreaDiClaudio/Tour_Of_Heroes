import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//This marks the class as one that participates in the dependency injection system.
//Removing data access from components means you can change your mind about the implementation anytime, without touching any components. They don't know how the service works.
@Injectable({
  //When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it. Registering the provider in the @Injectable metadata also allows Angular to optimize an application by removing the service if it isn't used.
  providedIn: 'root',
})

export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() { }

}