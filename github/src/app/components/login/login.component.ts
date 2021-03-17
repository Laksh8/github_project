import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  constructor( private authService:AuthService, private toastr:ToastrService ) { }

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.authService.login(this.loginForm.value).subscribe(
        (res:any) => {
          console.log(res);
          this.toastr.success("Login Successfully.")
          for(let i of Object.keys(res)){
            localStorage.setItem(i,res[i]); 
          }
        },
        (err) => {
          console.log(err)
          this.toastr.error("Something went wrong.");

        }
      )
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required])
    })
  }

}
