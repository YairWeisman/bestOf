import {Component, Output} from '@angular/core';
import './graph.script';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  genre = 'Pop';
  showMore = false;
  about = '';
  genersInfo = {
    'Pop': 'about pop music...',
    'Rock': 'about rock...',
    'Jazz': 'about jazz'
  };
  learn() {
    this.showMore = true;
    this.about = this.genersInfo[this.genre];
  }
}
