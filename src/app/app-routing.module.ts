import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailpokemonComponent } from './components/detailpokemon/detailpokemon.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path: 'pokemon', component:PokemonComponent },
  {path: 'detalles/:valor', component:DetailpokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
