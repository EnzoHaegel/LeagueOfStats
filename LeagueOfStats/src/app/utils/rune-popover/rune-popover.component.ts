import { Component, Input, OnInit } from '@angular/core';
import { IRune } from 'src/app/models/IRunes';
import { RunesService } from 'src/app/services/runes.service';

@Component({
  selector: 'app-rune-popover',
  templateUrl: './rune-popover.component.html',
  styleUrls: ['./rune-popover.component.scss']
})
export class RunePopoverComponent implements OnInit {
  @Input() rune!: IRune;

  constructor(
    public runeService: RunesService,
  ) { }

  ngOnInit(): void {
  }

}
