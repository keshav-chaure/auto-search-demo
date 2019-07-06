import { Component, OnInit } from '@angular/core';

import {User, IUserResponse} from '../../model/user.class';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AutoSearchUserService} from '../../service/auto-search-user.service';
import {switchMap, debounceTime, tap, finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-auto-search-user',
  templateUrl: './auto-search-user.component.html',
  styleUrls: ['./auto-search-user.component.css']
})
export class AutoSearchUserComponent implements OnInit {
  filteredUsers: User[] = [];
  usersForm: FormGroup;
  isLoading = false;
  
  constructor(private fb: FormBuilder, private appService: AutoSearchUserService) {}

  ngOnInit() {
    this.usersForm = this.fb.group({
      userInput: null
    })

      this.usersForm
      .get('userInput')
      .valueChanges
      .pipe(
        debounceTime(300),
        tap(() => this.isLoading = true),
        switchMap(value => this.appService.search({name: value}, 1)
        .pipe(
          finalize(() => this.isLoading = false),
          )
        )
      )
      .subscribe(users => this.filteredUsers = users.results);
  }

  displayFn(user: User) {
    if (user) { return user.name; }
  }
  

}
