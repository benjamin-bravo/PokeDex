import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private httpService: HttpClient) {
   }

   getGen1(){
    return this.httpService.get("https://pokeapi.co/api/v2/pokemon?limit=151").pipe(first())
   }

}

export interface pokemon{
  name:string;
  url: string;
}