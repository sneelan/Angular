import { Component } from '@angular/core';
import { UsersData } from './userdata.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  providers: [UsersData]
})
export class ServiceComponent {

}
