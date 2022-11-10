import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your perffect banking partner"
  // call this in the html file
  data="enter ac num"
  // without giving placeholder we can give like this also

  acno:any 
  psw:any
  // when ngmodel is given data gien in html will automatically saved in this because any is given

  // creating a database,here obeject inside object,that is usedetails is the key of first object and inside element is value,inside that object there are other keys and values
  userdetails:any={
   1000:{acno:1000,username:"amal",password:123,balance:0},
   1001:{acno:1001,username:"anu",password:123,balance:0},
   1002:{acno:1002,username:"arun",password:123,balance:0},
   1003:{acno:1003,username:"mega",password:123,balance:0}
  }
// constructor is used to initialize oject at the time of creating,that is in this class first constuctor will work then  ngoninit() only then what we create will work
  constructor(private router:Router) { }
//we have to give a access specifier when dependacy injection is given ,either private/public
// normally we give private 

  ngOnInit(): void {
  }
  // creating method
login(){
// we are assingin acno and psw to not use this everytime for ease of use,down 
var acno=this.acno
var psw=this.psw
var userdetails=this.userdetails
// now we can use anco,psw etc and this is not needed

if(acno in userdetails){
if(psw==userdetails[acno]['password']){
  alert("login successfull")
  // redirection
  this.router.navigateByUrl('dashboard')
}
else{
  alert('incorrect password')
}
}
else{
  alert('user does not exist')
}

  alert('login clicked')
}
}
