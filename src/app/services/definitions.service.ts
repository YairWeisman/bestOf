import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DefinitionsService {

  constructor(private http: Http) {
    this.http.get('../../Jsons/dhMeanings.json')
      .subscribe(res => this.definitions = res.json());
  }

  private definitions: JSON;

  getDef() {
    return this.definitions;
  }
}
