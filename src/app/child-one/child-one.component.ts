import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  message = 'Hola Mundo!';
  @Input() num: number;
  
  constructor() { }

  ngOnInit() {
    console.log(this.num);
  }

}
