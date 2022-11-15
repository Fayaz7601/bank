import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
  
// constructor is used to initialize oject at the time of creating,that is in this class first constuctor will work then  ngoninit() only then what we create will work
  constructor(private router:Router,private ds:DataService) { }
//we have to give a access specifier when dependacy injection is given ,either private/public
// normally we give private 

// there was a login method here check git

  ngOnInit(): void {
  }
  // creating method
login(){
// we are assingin acno and psw to not use this everytime for ease of use,down 
var acno=this.acno
var psw=this.psw

// calling logic from dataservice

const result=this.ds.login(acno,psw)
// this acno and psw are from user input
if(result){
  alert('login sucess')
  this.router.navigateByUrl('dashboard')
}

}
}