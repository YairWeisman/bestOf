import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-genre-info',
  templateUrl: './genre-info.component.html',
  styleUrls: ['./genre-info.component.css']
})
export class GenreInfoComponent {
  @Input() year: any;

}
