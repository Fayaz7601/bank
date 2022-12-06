import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  // to show the name of the person logged in,we can directl share data from data serive to dashboard's HTML
  // so we need to call here first then to html
  user:any

  acno: any
  psw: any
  amt: any

  acno1: any
  psw1: any
  amt1: any

  sdate:any

  constructor(private ds:DataService,private router:Router) {
    this.user=this.ds.currentuser
    this.sdate=new Date();
   }

  ngOnInit(): void {
    // after logiut if we click back button it does not go back to dashboard,instead it stays in login page
    if(!localStorage.getItem('currentacno')){
      alert('please login first')
      this.router.navigateByUrl('')
    }
  }

  deposit() {
    var acno = this.acno
    var psw = this.psw
    var amt = this.amt
    //  alert('deposit wroked')

    // calling the method from Data service,first dependacy injection in constructor

    const result = this.ds.deposit(acno, psw, amt)
    if (result) {
      alert(`${amt} is credited in your account and the balance is ${result}`)
    }
  }

  withdraw() {
    var acno1 = this.acno1
    var psw1 = this.psw1
    var amt1 = this.amt1
    // alert('withdraw worked')

    // calling the method from Data service,first dependacy injection in constructor

    const result = this.ds.withdraw(acno1, psw1, amt1)
    if (result) {
      alert(`${amt1} is debited in your account and the balance is ${result}`)
    }

  }

  logout(){
    localStorage.removeItem('currentuser')
    localStorage.removeItem('currentacno')

    this.router.navigateByUrl('')
  }
  delete(){
    // parent-child dec 5
    this.acno=JSON.parse(localStorage.getItem('currentacno')||'');
  }
  onCancel(){
    this.acno=""
  }
}
