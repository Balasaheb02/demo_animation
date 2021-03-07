import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { UserServiceService } from './user-service.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  // userData: any;
  // @ViewChild('addbutton', { static: true }) addbutton: ElementRef

  // constructor(private _userService: UserServiceService) {
  //   this.userData = this._userService.fetchUser();
  // }

  // click$: Observable<any> = fromEvent(document, 'click');
  ngOnInit() {

  }

  // getData() {
  //   return this.userData.fetchUser().subscribe((res) => console.log(res));
  // }

  // private subscribeToObservables() {
  //   this.click$.subscribe(() => console.log(`Mouse click event!`))
  // }

  // ngAfterViewInit() {

  //   fromEvent(this.addbutton.nativeElement, 'click').subscribe(
  //     res => console.log(this.userData)
  //   )
  // }

}
