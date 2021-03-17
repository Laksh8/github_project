import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private toastr:ToastrService) { }

  success(message:string){
    return this.toastr.success(message);
  }
  error(message:string){
    return this.toastr.error(message);
  }
  warning(message:string){
    return this.toastr.warning(message);
  }
  info(message:string){
    return this.toastr.info(message);
  }
}
