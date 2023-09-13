import { Component } from '@angular/core';
import {
  Http,
  Response,
  RequestMethod,
  RequestOptions,
  Headers,
} from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 4';

  result;
  errorFromSubscribe;
  errorFromCatch;

  constructor(private http: Http) {}

  onClick() {
    this.http
      .get('http://34.88.166.11/services/user-manager-service/users/profiles')
      .subscribe(
        (res: Response) => {
          console.log(res);
          this.result = JSON.stringify(res.json());
        },
        (error) => {
          console.log(error);
          this.errorFromSubscribe = error;
        }
      );
  }
}
