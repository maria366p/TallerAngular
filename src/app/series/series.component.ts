import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import {dataSerie} from './dataSerie';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor() { }
  series: Array<Serie> = [];
  seasonsAverage = 0;

  

  getSerieList(): Array<Serie> {
    return dataSerie;
  }

  getAverageSeasons() {
    for (let i = 0; i < dataSerie.length; i++) {
      const serie = dataSerie[i];
      this.seasonsAverage += serie.seasons
    }
    this.seasonsAverage =  this.seasonsAverage / this.series.length
    return this.seasonsAverage
  }

  

  ngOnInit() {
    this.series = this.getSerieList();
    this.seasonsAverage = this.getAverageSeasons();
  }

}
