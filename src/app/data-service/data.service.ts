import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  
  getUsers() {
    let uri: string = 'https://jsonplaceholder.typicode.com/users';

  }

}
