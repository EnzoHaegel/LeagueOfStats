import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionComponent } from './pages/champions/champion/champion.component';
import { ChampionsComponent } from './pages/champions/champions.component';
import { ProfilComponent } from './pages/profil/profil.component';

const routes: Routes = [
  { path: '', redirectTo: 'profil', pathMatch: 'full' },
  { path: 'profil', component: ProfilComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'champion', component: ChampionComponent },
  { path: '**', redirectTo: 'profil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
