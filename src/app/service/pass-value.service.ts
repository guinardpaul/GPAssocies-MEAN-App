import { Injectable } from '@angular/core';

import { Client } from '../models/client';

@Injectable()
export class PassValueService {
  client: any = {};

  public setValueClient(client: any) {
    this.client = client;
  }

  public getValueClient() {
    return this.client;
  }


  constructor() { }

}
