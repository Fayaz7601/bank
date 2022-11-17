import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname:any
  acno:any
  psw:any

  constructor(private ds:DataService,private router:Router,private formbuilder:FormBuilder) { }
// we need data from Dataservice [service] so we use dependacy injection

  //  create register form model
  // 15-11
  
  registerform=this.formbuilder.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9]+')]]})
  ngOnInit(): void {
  }

   register(){
    // we are giving like so we can just call the name else we have to use this.name
    var uname=this.registerform.value.uname
    var acno=this.registerform.value.acno
    var psw=this.registerform.value.psw


    if(this.registerform.valid){
          // calling method from Dataservice,storing it ina variable

      const result=this.ds.register(acno,uname,psw)

    

    // if it is true if works otherwise else works  
    if(result){
      alert('succesfully registered')
      this.router.navigateByUrl('')
      // it will redirected to login,path of login empty
    }
    else{
      alert('user already exis')     
    }
  }
  else{
    alert('invalid form')
  }
   }


}
