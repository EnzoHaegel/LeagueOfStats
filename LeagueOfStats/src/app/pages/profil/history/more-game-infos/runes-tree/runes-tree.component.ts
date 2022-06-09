import { Component, Input, OnInit } from '@angular/core';
import { IPerks } from 'src/app/models/IRiot';
import { IRunes, IStyles } from 'src/app/models/IRunes';
import { RunesService } from 'src/app/services/runes.service';

@Component({
  selector: 'app-runes-tree',
  templateUrl: './runes-tree.component.html',
  styleUrls: ['./runes-tree.component.scss']
})
export class RunesTreeComponent implements OnInit {
  @Input() runes!: IPerks;

  public primary!: IStyles | undefined;
  public secondary!: IStyles | undefined;

  constructor(
    public runesService: RunesService,
  ) { }

  ngOnInit(): void {
    this.primary = this.runesService.getTypeFromId(this.runes.styles[0].selections[0].perk);
    this.secondary = this.runesService.getTypeFromId(this.runes.styles[1].selections[0].perk);
  }

  public isRuneActivated(rune: IRunes): boolean {
    for (let perk of this.runes.styles) {
      for (let selections of perk.selections) {
        if (selections.perk === rune.id) {
          return true;
        }
      }
    }
    return false;
  }

}
