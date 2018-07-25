import { Component, OnInit, Input } from '@angular/core';
import { IClient } from '../../interfaces/client';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  @Input() selectClient: IClient = null;

  constructor() { }

  ngOnInit() {}

}
