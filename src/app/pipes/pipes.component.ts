import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  lowerCaseExample = 'This text should be all lowercase';
  upperCaseExample = 'This text should be all uppercase';
  dateExample = new Date(1969, 11, 27);
  currencyExample = 500;
  percentExample = 0.13495;

  exponentialExample: number;
  exponent: number;

  constructor() { }

  ngOnInit() {
  }

}
