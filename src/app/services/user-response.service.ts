import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse } from '../UserResponse';

@Injectable({
  providedIn: 'root'
})
export class UserResponseService {


  userRes: UserResponse [] = [];
  marks: number = 0;
  constructor(private http:HttpClient) { }

  baseUrl = "http://127.0.0.1:8088";

  addResponse(data: any){
    this.userRes.push(data);
  }

  getResponse(){
    return this.userRes;
  }

  submitResponse(){
    this.http.post<UserResponse>(this.baseUrl+ "/submit", this.getResponse())
    .subscribe(data => console.log("Data added Successfully!"));
  }
}
