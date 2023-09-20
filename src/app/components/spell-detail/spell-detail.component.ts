import { Component, OnInit } from '@angular/core';
import { SpellsDataService } from 'src/app/service/spells-data.service';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.scss']
})
export class SpellDetailComponent implements OnInit{
  // spell: Spell
  myparam="";

  constructor(public spellData: SpellsDataService ){

  }

  ngOnInit(): void {

    this.spellData.getSpellDetail(this.myparam);
  }


}
