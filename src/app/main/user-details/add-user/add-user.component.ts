import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { environment } from 'src/environments/environment';
import { Observable, from } from 'rxjs';
import {UserServiceService} from '../user-service.service';
import {map, take, toArray, pluck, filter} from 'rxjs/operators'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  baseUrl: string;
  loadData: User[] = [];
  isFetching = false


  userDetailForm = this.fb.group({
    first_name: ['', [Validators.required, Validators.minLength(3)]],
    last_name: ['', [Validators.required, Validators.minLength(3)]],
    street: ['', Validators.required],
    country: ['', Validators.required],
    state: ['', Validators.required],
    pincode: ['', Validators.required],
    email: ['', Validators.required],
    number: ['', Validators.required]
  });


  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private user_service: UserServiceService
  ) {
    this.baseUrl = environment.baseUrl;
  }

  ngOnInit() {
this.fetchData();
console.log(this.loadData);

const source = from(this.loadData)

source.subscribe(res => console.log(res))

source.pipe(
  filter(member => member.first_name.length > 2)

).subscribe(res => console.log(res))

  }

  setMessage(message){
this.user_service.message.next(message.value);
console.log(message.value)
  }

  


  onSubmit(response: User) {
   
    if (this.userDetailForm.valid) {
      this.http.post<User>(`${this.baseUrl}/intenal`, this.userDetailForm.value)
        .subscribe((response: User) => console.log('response', response));
      this.loadData.push(this.userDetailForm.value)
    }
  }

 

 public fetchData() {
   this.isFetching = true
   let main;
  
   return this.user_service.fetchUser().pipe(map(data=> data) )
   
   .subscribe(
   
     res => {console.log(res)
          
             this.isFetching = false
     }
    );
  }

  //   onSubmit(){
  // console.log(this.userDetailForm.value)
  //   }

}


