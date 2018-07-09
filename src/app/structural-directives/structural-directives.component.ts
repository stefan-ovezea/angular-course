import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  showText = true;

  constructor() { }

  ngOnInit() {
  }

  toggleText() {
    this.showText = !this.showText;
  }

}
