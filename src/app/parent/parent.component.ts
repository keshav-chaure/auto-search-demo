import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentMessage="message form parent!";
  public users:any;
  constructor(private userService:UserServiceService) { }

  ngOnInit() {
    this.getUsersMock();
  }

  getUsersMock(): void {
    this.users = this.userService.getUsersMock();
    console.log(this.users);
  }

  onSubmit($event:any) {    
    const inputValue = $event.target.name.value;
    this.parentMessage=this.parentMessage+" "+inputValue;
  }
}
