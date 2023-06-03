import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  customers=[
    {name:'Rajesh', category:'3d', img:"<i class='bi bi-person-circle'></i>"},
    {name:'Neelan', category:'drawing', img: '<i class="bi bi-person-circle"></i>'},
    {name:'Akhil Murugan', category:'3d', img: '<i class="bi bi-person-circle"></i>'},
    {name:'Nimesh', category:'drawing', img: '<i class="bi bi-person-circle"></i>'},
    {name:'Faizal', category:'drawing', img: '<i class="bi bi-person-circle"></i>'},
    {name:'Sahath', category:'drawing', img: '<i class="bi bi-person-circle"></i>'}
  ];
  SelectedCustomer:string=''; getCustomer:string='';
  passCustomer(getCustomer:string){this.SelectedCustomer=getCustomer;}  
  removeCustomer(id:number){this.customers.splice(id, 1);}
}
