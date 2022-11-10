import { Component, OnInit } from '@angular/core';
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

  constructor(private ds:DataService,private router:Router) { }
// we need data from Dataservice [service] so we use dependacy injection

  ngOnInit(): void {
  }

   register(){
    // we are giving like so we can just call the name else we have to use this.name
    var uname=this.uname
    var acno=this.acno
    var psw=this.psw

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


}
