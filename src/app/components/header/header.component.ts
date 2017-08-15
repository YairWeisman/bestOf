import { Component } from '@angular/core';
import {DefinitionsService} from '../../services/definitions.service';
import {animate, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(1000, style({opacity:1})),

      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0}))
      ])
    ])
  ],
  providers: [DefinitionsService]
})
export class HeaderComponent {

  constructor(private definitionsService: DefinitionsService) {
    this.definitions = this.definitionsService.getDef();
  }

  definitions: any[];
  showDef = false;
  def: String;
  i = 0;

  getDef() {
    this.showDef = true;
    this.def = this.definitions[this.i].definition;
    this.i++;
  }
  downloadData() {}


}
