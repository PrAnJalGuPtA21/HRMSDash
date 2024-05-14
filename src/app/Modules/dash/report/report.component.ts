import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  isweek: boolean = true;
  ismonth: boolean = false;
  onweek() {
    this.isweek = true;
    this.ismonth = false;
  }
  onmonth() {
    this.isweek = false;
    this.ismonth = true;
  }

  weekDays: Array<string> = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: "In - 9:10", date: '2024-04-01' },
      { title: 'Out - 6:10', date: '2024-04-01' }
    ]
  };
  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  isdays: boolean = true;
  ishours: boolean = false;

  onDays() {
    this.isdays = true;
    this.ishours = false;
  }

  onHours() {
    this.isdays = false;
    this.ishours = true;
  }
}
