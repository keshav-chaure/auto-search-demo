import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';

import { ChildOneComponent } from '../child-one/child-one.component';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent implements OnInit,AfterViewInit{
  
  @ViewChild(ChildOneComponent,{static:false}) child:any;

  message:string;
  number:number;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.cd);
    this.number=19;
  }


  
  ngAfterViewInit(): void {
    console.log(this.child.cd);

    setTimeout(() => {
      this.message = this.child.message;
  });
    
  }
  //this.message=this.child.message;
}
