import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionComponent } from './pages/champions/champion/champion.component';
import { ChampionsComponent } from './pages/champions/champions.component';
import { ItemsComponent } from './pages/items/items.component';
import { CurrentGameComponent } from './pages/profil/history/current-game/current-game.component';
import { ProfilComponent } from './pages/profil/profil.component';

const routes: Routes = [
  { path: '', redirectTo: 'profil', pathMatch: 'full' },
  { path: 'profil', component: ProfilComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'champion', component: ChampionComponent },
  { path: 'spectator', component: CurrentGameComponent },
  { path: '**', redirectTo: 'profil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
