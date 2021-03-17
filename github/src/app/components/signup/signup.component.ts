import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  constructor(private authService:AuthService ,private gs:GeneralService ) { }
  
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      first_name:new FormControl("",[Validators.required]),
      last_name:new FormControl("",[Validators.required]),
      username:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.email,Validators.required]),
      password:new FormControl("",[Validators.required]),
      confirm_password:new FormControl("",[Validators.required])
    })
  }

  onSubmit(){
    if(this.signupForm.valid && (this.signupForm.controls.password.value == this.signupForm.controls.confirm_password.value)){
      this.authService.signup(this.signupForm.value).subscribe(
        (res:any) => {
          console.log(res);
          this.gs.success("Signup Successfully");
          for(let i of Object.keys(res)){
            localStorage.setItem(i,res[i]); 
          }
        },
        (err) =>{
          this.gs.error("Something Went Wrong.");
          console.log(err);
        }
      )
    } else{
      this.gs.error("password should be equal to confirm password")
    }
  }

}
