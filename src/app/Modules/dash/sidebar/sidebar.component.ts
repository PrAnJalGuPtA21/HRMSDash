import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../Core/auth/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  name: string | undefined
  constructor(private auth: ApiService) { }
  
}

