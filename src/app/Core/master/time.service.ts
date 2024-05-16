import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Time } from '../Interfaces/Time.interface';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) { }

  // checkInTime(data: checkIn) {
  //   return this.http.post<checkIn[]>('http://localhost:3000/checkIn', data)
  // }

  // checkOutTime(data: checkOut) {
  //   return this.http.post<checkOut[]>('http://localhost:3000/checkOut', data);
  // }

  timeConsole(data:Time){
    return this.http.post<Time>('http://localhost:3000/Time',data);
  }

  chartTime(data:Time){
    this.http.get<Time>('http://localhost:3000/Time');
  }
  
}
