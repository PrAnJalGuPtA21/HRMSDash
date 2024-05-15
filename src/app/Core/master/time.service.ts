import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { checkIn, checkOut } from '../Interfaces/Time.interface';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) { }

  checkInTime(data: checkIn) {
    return this.http.post<checkIn[]>('http://localhost:3000/checkIn', data)
  }

  checkOutTime(data: checkOut) {
    return this.http.post<checkOut[]>('http://localhost:3000/checkOut', data);
  }
}
