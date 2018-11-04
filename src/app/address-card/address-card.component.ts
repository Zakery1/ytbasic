import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
  @Input('name') userName: string;

  constructor() { 


}

  ngOnInit() {
    this.user = {
      name: this.userName,
      title: 'Software Developer',
      address: '1234 Main St, City, State, 100010',
      phone: [
        '123-123-1234',
        '456-456-4567',
        '222-444-5555'
      ]
    };
  
  }

}
