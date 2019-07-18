import { Component, OnInit, ViewRef } from '@angular/core';

@Component({
  selector: 'app-msg-super-parent',
  templateUrl: './msg-super-parent.component.html',
  styleUrls: ['./msg-super-parent.component.css']
})
export class MsgSuperParentComponent implements OnInit {

  greet:string;
  constructor() { }

  ngOnInit() {
    this.greet="hello!";
    console.log(ViewRef);
  }

}
