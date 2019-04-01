import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {PostInterface} from '../post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  homePara = true;
  homeSwitch = 'blue';
  homeFor = ['blue', 'red'];
  myData$: PostInterface[];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getData().subscribe((api: PostInterface[]) => this.myData$ = api);
  }

  ngOnDestroy() {
    console.log('Home component is destroyed');
  }
}
