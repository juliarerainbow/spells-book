import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Spell } from 'src/app/model/spell';
import { SpellsDataService } from 'src/app/service/spells-data.service';

@Component({
  selector: 'app-spell-card',
  templateUrl: './spell-card.component.html',
  styleUrls: ['./spell-card.component.scss']
})
export class SpellCardComponent {

  @Input() spellData?: Spell;

  constructor(private spell: SpellsDataService, private router: Router){}

  selectSpell(){
    this.spell.selectedSpell = this.spellData!.index;
    this.router.navigate(['detail'])
  }
}
