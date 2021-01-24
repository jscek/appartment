import { Component, OnInit } from '@angular/core';
import { FlatStructure } from 'src/app/models/flatStructure';
import { UserStructure } from 'src/app/models/userStructures';
import { FlatsService } from 'src/app/services/flats.service';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.css'],
})
export class RankingPageComponent implements OnInit {
  usersSortedByScore: UserStructure[] = [];
  flat: FlatStructure = null;
  points: number[] = [];

  constructor(private flatsService: FlatsService) {}

  ngOnInit(): void {
    this.flatsService.currentFlat.subscribe((flat) => {
      if (!flat) {
        return;
      }

      this.flat = flat;
      let usersSorted = flat.users;
      usersSorted.sort((u1, u2) => u2.score - u1.score);
      console.log(usersSorted.length);
      this.usersSortedByScore = usersSorted.splice(0, 3);
    });
  }
}
