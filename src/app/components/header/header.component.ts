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
