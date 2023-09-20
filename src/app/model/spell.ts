export interface Spell {
  index:string;
  name:string;
  url:string;
}


export interface SpellDetail {
  index: string
  name: string
  desc: string[]
  higher_level: string[]
  range: string
  components: string[]
  material: string
  ritual: boolean
  duration: string
  concentration: boolean
  casting_time: string
  level: number
  attack_type: string
  url: string
}