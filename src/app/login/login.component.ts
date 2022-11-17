import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "your perfect banking partner"
  // call this in the html file
  data = "enter ac num"
  // without giving placeholder we can give like this also








  // constructor is used to initialize oject at the time of creating,that is in this class first constuctor will work then  ngoninit() only then what we create will work
  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  loginform = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  //we have to give a access specifier when dependacy injection is given ,either private/public
  // normally we give private 

  // there was a login method here check git

  ngOnInit(): void {
  }
  // creating method
  login() {
    // we are assingin acno and psw to not use this everytime for ease of use,down 
    var acno = this.loginform.value.acno
    var psw = this.loginform.value.psw

    if (this.loginform.valid) {
      const result = this.ds.login(acno, psw)


      // calling logic from dataservice

      // this acno and psw are from user input
      if (result) {
        alert('login sucess')
        this.router.navigateByUrl('dashboard')
      }
    }
    else {
      alert('invalid')
    }
  }
}