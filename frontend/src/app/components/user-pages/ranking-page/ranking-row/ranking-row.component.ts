import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking-row',
  templateUrl: './ranking-row.component.html',
  styleUrls: ['./ranking-row.component.css']
})
export class RankingRowComponent implements OnInit {

  @Input() place: number;
  @Input() points: number;

  topRankPlaces: number[] = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

  isTopRank(): boolean {
    if (this.topRankPlaces.includes(this.place)) {
      return true;
    }
    return false;
  }

}
