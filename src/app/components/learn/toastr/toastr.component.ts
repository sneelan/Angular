import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
//import { MessageService } from '../service/message.service';


@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToastrComponent implements OnInit{
  constructor(
    private toastr: ToastrService,
    //private messageService: MessageService
    ) { }
    message:string='Success message';
    messageTitle:string='Success';

    ngOnInit() {
      //this.messageService.message$.subscribe(message => {this.showSuccess(message, "Custom Message");});
    }


  showSuccess(message?:string, messageTitle?:string) {
    //this.toastr.info(message, 'Info');
    this.toastr.success(message, messageTitle, {
      timeOut: 2000, // duration in milliseconds
      progressBar: true, // show progress bar
      progressAnimation: 'increasing', // progress bar animation style
      closeButton: true, // show close button
      positionClass: 'toast-top-right', // toast position
      toastClass: 'toast-success' // custom CSS class for success toast
    });
  }

  showError() {
    this.toastr.error('Error message', 'Error', {
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'decreasing',
      closeButton: true,
      positionClass: 'toast-top-right',
      toastClass: 'toast-error'
    });
  }

  showWarning() {
    this.toastr.warning('Warning message', 'Warning', {
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'increasing',
      closeButton: true,
      positionClass: 'toast-top-left',
      toastClass: 'toast-warning'
    });
  }

  showInfo() {
    this.toastr.info('Info message', 'Info', {
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'decreasing',
      closeButton: true,
      positionClass: 'toast-top-left',
      toastClass: 'toast-info'
    });
  }
}