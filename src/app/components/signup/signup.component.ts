import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm:FormGroup
 public firstname;
  constructor(private formBuilder:FormBuilder, private route:Router) {


    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  
  }, );
   }

  ngOnInit() {
  }


  goHome(){
    let id=4546565
    this.route.navigateByUrl('test/'+id)

  }
  register(e){
    console.log(" resgiter calling", this.registerForm.value);
    let reqData={
      firstName:this.registerForm.value.firstName,
      lastName:this.registerForm.value.lastName
    }
    console.log(" reqdata body ", reqData);
    
    
  }

}
