import { User } from './address-card/user.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  inputText: string = "Initial Value";

  constructor(){
    this.user = new User();
    this.user.name = "Foo Bar";
    this.user.designation = "Software Engineer";
    this.user.address = "1000 Street City State"
    this.user.phone = [
      '123-111-1111',
      '122-444-3333'
    ]
  }

}
