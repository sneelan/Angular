import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NewToastrSerive } from './newtoaster.service';


@Component({
  selector: 'app-toastrservice',
  template: `<div class="row m-0 p-0">
  <div class="col-6">
    <button (click)="showSuccess('Success message', 'Title')">Show Success</button>
    <button (click)="showError()">Show Error</button>
    <button (click)="showWarning()">Show Warning</button>
    <button (click)="showInfo()">Show Info</button>
  </div>
  <div class="col-6">
     
  </div>
</div>`,
  styleUrls: ['./toastrservice.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToastrserviceComponent implements OnInit{
  NewToastrMessage: any;
  constructor(
    private toastr: ToastrService,
    //private ToastServ: NewToastrSerive
    ) { }
    ngOnInit() {
      //this.ToastServ.NewToastrMessage$.subscribe(message => {this.showSuccess(message, "Custom Title");});
    }

    //message:string='Success message';
    //messageTitle:string='Success';
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