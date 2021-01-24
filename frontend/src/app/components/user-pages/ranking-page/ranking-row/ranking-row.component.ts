import { Component, Input, OnInit } from '@angular/core';
import { FlatStructure } from 'src/app/models/flatStructure';
import { UserStructure } from 'src/app/models/userStructures';
import { FlatsService } from 'src/app/services/flats.service';

@Component({
  selector: 'app-ranking-row',
  templateUrl: './ranking-row.component.html',
  styleUrls: ['./ranking-row.component.css'],
})
export class RankingRowComponent implements OnInit {
  @Input() place: number;
  @Input() points: number;

  topRankPlaces: number[] = [1, 2, 3];
  constructor() {}
  ngOnInit(): void {}

  isTopRank(): boolean {
    if (this.topRankPlaces.includes(this.place)) {
      return true;
    }
    return false;
  }
}
