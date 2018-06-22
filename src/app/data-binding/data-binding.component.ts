import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  properyBindingText = 'Property bound example text';
  eventBindingText = '';
  twoWayBindingText = '';

  stringInterpolationText = 'String interpolated example text';

  constructor() { }

  ngOnInit() {
  }

}
