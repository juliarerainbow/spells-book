import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spell, SpellDetail } from '../model/spell';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellsDataService {


  selectedSpell = 'fire-ball'


  constructor(private http:HttpClient) { }

  getSpellsList() {

    return this.http.get<Spell>('https://www.dnd5eapi.co/api/spells').pipe(
      tap(obj => console.log('siamo qui',obj)),
      map((obj:any) => obj.results),
      tap(obj => console.log('siamo qui senza result',obj)),

    );
  }

  getSpellDetail():Observable<SpellDetail> {
    return this.http.get<SpellDetail>('https://www.dnd5eapi.co/api/spells/' + this.selectedSpell)
  }


  getSpellDetailWithIndex(index: string) {

    return this.http.get<SpellDetail>('https://www.dnd5eapi.co/api/spells/'+index);

  }
  





}
