import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SpellsListComponent } from './components/spells-list/spells-list.component';
import { SpellDetailComponent } from './components/spell-detail/spell-detail.component';

const routes: Routes = [
  {path:'home', component: MainComponent},
  {path:'list', component: SpellsListComponent},
  {path:'detail/:index', component: SpellDetailComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
