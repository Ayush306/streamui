import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Registration } from 'app/service/registration';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private registrationService:Registration) { }
   signUpForm = new FormGroup({
          firstName: new FormControl(),
          lastName: new FormControl(),
          email: new FormControl(),
          mobileNo: new FormControl(),
          password: new FormControl(),
          confirmPassword: new FormControl()
        
   });

 
  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
}
signUp(){
  console.log("signUp");
  
this.registrationService.signUp(this.signUpForm.value).subscribe({
  next:(data)=>{
    console.log(data);
  },error:err=>{
  alert(err);
  }
})
  
}
ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
}

}
