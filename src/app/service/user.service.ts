import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiEndpoint = 'http://localhost:80/webapiproject';
  user  : any;
  constructor() { }
}
// class User
// {
//   cid:number=0;
//   name:string='';
//   email:string='';
//   phone:string='';
//   password:string='';
// }
