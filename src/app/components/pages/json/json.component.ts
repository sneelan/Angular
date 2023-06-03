import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-json', 
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss']
})
export class JsonComponent implements OnInit {

	
	constructor(
		private modalService: ModalService, private http : HttpClient,
		private ngbModal: NgbModal
		) {}	
	
	//modal
	openModal(content: any) {this.modalService.openModal(content);}
	closeModal() {this.modalService.closeModal();this.EmployeesArray='';this.getEmployees();}

	//fetch employees
	
	ngOnInit():void {
		this.getEmployees();
	}
	public EmployeesArray:any;
	public getEmployees(){
    this.http.get('http://localhost:3000/employees').subscribe(
      data => {
        this.EmployeesArray=data;
      }
    ); 
  }




	//sorting table
	ShowDynamicTable: any;
  sortedColumn: string | undefined;
  sortDirection: 'asc' | 'desc' | undefined;
	sortTable(column: string): void {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }
    // Call the sort function or API to sort the data accordingly
    this.sortEmployees();
  }
	sortEmployees(): void {
    // Implement your sorting logic here based on this.sortedColumn and this.sortDirection
    // Update the EmployeesArray with the sorted data
    // For example, you can use Array.prototype.sort() to sort the data
			if (this.sortedColumn && this.sortDirection) {
				this.EmployeesArray.sort((a: any, b: any) => {
					const valueA = a[this.sortedColumn as string];
					const valueB = b[this.sortedColumn as string];
		
					if (valueA && valueB) {
						if (valueA < valueB) {
							return this.sortDirection === 'asc' ? -1 : 1;
						} else if (valueA > valueB) {
							return this.sortDirection === 'asc' ? 1 : -1;
						}
					}
					return 0;
				});
			}				
  }
}