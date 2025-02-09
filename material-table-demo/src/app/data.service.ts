import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(){
    const data = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
      { id: 3, name: 'Sam Green', email: 'sam@example.com', role: 'User' },
      { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Admin' },
      { id: 5, name: 'Tony Stark', email: 'tony@starkindustries.com', role: 'Admin' },
      { id: 6, name: 'Steve Rogers', email: 'steve@shield.com', role: 'User' },
      { id: 7, name: 'Thor Odinson', email: 'thor@asgard.com', role: 'Admin' },
      { id: 8, name: 'Natasha Romanoff', email: 'natasha@shield.com', role: 'User' },
      { id: 9, name: 'Bruce Banner', email: 'bruce@avengers.com', role: 'User' },
      { id: 10, name: 'Clint Barton', email: 'clint@shield.com', role: 'User' },
      { id: 11, name: 'Wanda Maximoff', email: 'wanda@avengers.com', role: 'User' },
      { id: 12, name: 'Pietro Maximoff', email: 'pietro@avengers.com', role: 'User' },
      { id: 13, name: 'Peter Parker', email: 'peter@dailybugle.com', role: 'User' },
      { id: 14, name: 'Doctor Strange', email: 'strange@sorcerersupreme.com', role: 'Admin' },
      { id: 15, name: 'T’Challa', email: 'tchalla@wakanda.com', role: 'Admin' },
      { id: 16, name: 'Scott Lang', email: 'scott@pymtech.com', role: 'User' },
      { id: 17, name: 'Carol Danvers', email: 'carol@starforce.com', role: 'Admin' },
      { id: 18, name: 'Nick Fury', email: 'nick@shield.com', role: 'Admin' },
      { id: 19, name: 'Loki Laufeyson', email: 'loki@asgard.com', role: 'User' },
      { id: 20, name: 'Bucky Barnes', email: 'bucky@hydra.com', role: 'User' }
    ];

    return of(data);
  }
}
