import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { User } from './model/user';
import { map } from 'rxjs';

@Component({
  imports: [HttpClientModule],
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>RxJs - chiamata al Server !</h1>
    <a target="_blank" href="https://angular.dev/overview">
    {{ name }}
    </a>
  `,
})
export class App {
  name = 'Angular';

  constructor(
    private http: HttpClient
  ){
    this.http.get<User>('https://jsonplaceholder.typicode.com/users/1')
    .pipe(
      map(val => val.email)
    )
    .subscribe(res => 
      this.name = res
    )
  }
}

bootstrapApplication(App);
