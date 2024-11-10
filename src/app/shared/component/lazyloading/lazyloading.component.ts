import { Component, OnInit } from '@angular/core';
import { Iimg } from '../../model/img';
import { imgArr } from '../../const/img';

@Component({
  selector: 'app-lazyloading',
  templateUrl: './lazyloading.component.html',
  styleUrls: ['./lazyloading.component.scss']
})
export class LazyloadingComponent implements OnInit {
imgData : Array<Iimg> = imgArr
  constructor() { }

  ngOnInit(): void {
  }

}
