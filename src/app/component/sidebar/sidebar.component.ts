import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../main/user-details/user-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showFiller = false;
  message;

  constructor(private _message: UserServiceService) {
    this._message.message.subscribe(res  => {this.message = res;
      console.log(this.message)});
   }

  ngOnInit(): void {
  }

}
