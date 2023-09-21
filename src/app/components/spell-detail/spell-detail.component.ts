import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spell, SpellDetail } from 'src/app/model/spell';
import { SpellsDataService } from 'src/app/service/spells-data.service';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.scss']
})
export class SpellDetailComponent implements OnInit{
  // spell: Spell
  // myparam="";
  spellDetail?: Spell;

  constructor(public spellData: SpellsDataService,private route : ActivatedRoute ){}

  ngOnInit(): void {
    //this.spellData.getSpellDetail().subscribe((spell: SpellDetail) =>console.log(spell));

    // const params = new URLSearchParams(window.location.search)
    // if(params.get('spell')){
    //   this.spellData.getSpellDetailWithIndex(params.get('spell')!).subscribe((spell:SpellDetail)=> console.log(spell))
    // }


    const param=this.route.snapshot.paramMap.get('index');
    if(param){
      this.spellData.getSpellDetailWithIndex(param).subscribe({
        next:(detail)=> this.spellDetail = detail,
        error:(error) => console.log(error),
      }
        
      )
    }


  }


}
