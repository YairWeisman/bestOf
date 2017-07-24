import { Injectable } from '@angular/core';

@Injectable()
export class DefinitionsService {

  constructor() {
  }

  private definitions: JSON;

  getDef() {
    return this.definitions;
  }
}
