import {Component, OnChanges } from '@angular/core';
// import { yearSelected } from './graph.script';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnChanges{

  genre = 'Pop';
  showMore = false;
  about = '';
  yearSelected = '2016';
  genersInfo = {
    'Pop': 'about pop music...',
    'Rock': 'about rock...',
    'Jazz': 'about jazz'
  };
  genreOfYear = {
    '2016': 'Pop',
    '2015': 'Rock',
    '2014': 'Jazz'
  };
  inputBox = document.getElementById('4-input');
  inputBox.onBlur() {

  }
  ngOnChanges(): void {
    this.genre = this.genreOfYear[yearSelected];
    this.yearSelected = localStorage.getItem('yearSelected');
  }
  learn() {
    this.showMore = true;
    this.about = this.genersInfo[this.genre];
  }
}
