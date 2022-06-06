import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilComponent } from './pages/profil/profil.component';
import { HistoryComponent } from './pages/profil/history/history.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { ChampionsComponent } from './pages/champions/champions.component';
import { ChampionComponent } from './pages/champions/champion/champion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopoverComponent } from './pages/champions/popover/popover.component';
import { AttentionComponent } from './utils/attention/attention.component';
import { ItemPopoverComponent } from './utils/item-popover/item-popover.component';
import { ItemBlockComponent } from './pages/profil/history/item-block/item-block.component';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    HistoryComponent,
    ChampionsComponent,
    ChampionComponent,
    PopoverComponent,
    AttentionComponent,
    ItemPopoverComponent,
    ItemBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatDividerModule,
    CommonModule,
    NgbModule,
    AdsenseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
