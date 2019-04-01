import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public btnData = '';
  title = 'angularapp';
  clickMe() {
    this.btnData = 'Welcome to angularapp';
    console.log('got clicked');
  }
}
