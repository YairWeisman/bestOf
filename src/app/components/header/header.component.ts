import { Component } from '@angular/core';
import {DefinitionsService} from '../../services/definitions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DefinitionsService]
})
export class HeaderComponent {

  constructor(private definitionsService: DefinitionsService) {
    this.definitions = this.definitionsService.getDef();
  }

  definitions: any;
  showDef = false;
  def: String;

  getDef() {
    this.showDef = true;
    this.def = 'BLA ';
  }


}
