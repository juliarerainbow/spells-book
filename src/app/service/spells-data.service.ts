import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spell } from '../model/spell';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellsDataService {

  selectedSpell = ''


  constructor(private http:HttpClient) { }

  getSpellsList() {

    return this.http.get<Spell>('https://www.dnd5eapi.co/api/spells').pipe(
      tap(obj => console.log('siamo qui',obj)),
      map((obj:any) => obj.results),
      tap(obj => console.log('siamo qui senza result',obj)),

    );
  }

  getSpellDetail(param:any){
    console.log('ciao');

  }



}
