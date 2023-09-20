import { Component, OnInit } from '@angular/core';
import { Spell } from 'src/app/model/spell';
import { SpellsDataService } from 'src/app/service/spells-data.service';

@Component({
  selector: 'app-spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.scss'],
})
export class SpellsListComponent implements OnInit {

  spells: Spell[] = [];

  constructor(private spellData: SpellsDataService) {}

  ngOnInit(): void {
    this.spellData.getSpellsList().subscribe((childrenData) => {
      this.spells = childrenData;
    });
  }

  spellSelected(index: string) {


  }
}
