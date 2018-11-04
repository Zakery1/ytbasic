import { User } from './user.module';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {


  @Input('user') user: User;
  isCollapsed : boolean = true;

  constructor() { 
 }
  
 toggleCollapse() {
   this.isCollapsed = !this.isCollapsed;
 }

  ngOnInit() {

  }

}
