import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Interfaces/User.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  addUser(data:any){
    return this.http.post<User[]>('http://localhost:3000/user',data);
  }

  login(data : any){
    return this.http.get<User[]>('http://localhost:3000/user',data);
  }
}
