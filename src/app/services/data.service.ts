import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // to show the name of the user logging in at the dahboard
  // so we have to store the data at time of login in to a variable
  currentuser:any
  // balance in dashboard()

  currentacno:any
  // to store acno of the person logging in
  

  // redundant data
  userdetails: any = {
    1000: { acno: 1000, username: "amal", password: 123, balance: 0,transaction:[] },
    1001: { acno: 1001, username: "anu", password: 123, balance: 0,transaction:[] },
    1002: { acno: 1002, username: "arun", password: 123, balance: 0 ,transaction:[]},
    1003: { acno: 1003, username: "mega", password: 123, balance: 0 ,transaction:[]}
  }
  // when a new user registers we have to add his details here along with the rest,this cant be done in the
  // register ts file,so we give all the code here and call the mthod in register ts file
  // all the logic[code]that has direct connection[add,delete,etc] with database is creted in side Dataservice
  // 8-11-22  [from 1hr 10 mins]

  constructor() { }

  register(acno: any, username: any, password: any) {
    //  these acno,username,pass are coming from the input box of registration page [user input]
    var userdetails = this.userdetails
    // now we have check if the details enterd by user alreaady exists in the datbase [userdetails]
    if (acno in userdetails) {
      return false
    }
    //  is we use return in if in else also we must use return
    else {
      // we have to add the details to the database
      // first add the acno,since key and value are same here ust give directly as shown,now acno,name and pass will add
      userdetails[acno] = { acno, username, password, balance: 0,transaction:[] }
      return true
      // now call it in register ts file
    }
  }

  login(acno: any, psw: any) {
    // logic for login page like registrtaion given above
    // call this logic in login
    var userdetails=this.userdetails
    this.currentuser=userdetails[acno]['username']

    if (acno in userdetails) {
      if (psw == userdetails[acno]['password']) {
        this.currentacno=acno
        return true

      }
      else {
        alert('incorrect password')
        return false
      }
    }
    else {
      alert('user does not exist')
      return false
    }

  }

  deposit(acno: any, psw: any, amt: any) {
    let userdetails = this.userdetails
    // the amount entered by the user will be in string and the balance[0] is in integer,
    // so we need to convert the string into int using method method
    var amount = parseInt(amt)
    if (acno in userdetails) {
      if (psw == userdetails[acno]['password']) {
        userdetails[acno]['balance'] += amount

        // add deposit details in tranasction array   11-11-22  33mins
        userdetails[acno]['transaction'].push({type:'CREDIT',amount})
        return userdetails[acno]['balance']
      }
      else {
        alert('incorrect password')
        return false
      }
    }
    else {
      alert('incorrect username')
      return false
    }
  }

  withdraw(acno1: any, psw1: any, amt1: any) {
    let userdetails = this.userdetails
    var amount = parseInt(amt1)
    if (acno1 in userdetails) {
      if (psw1==userdetails[acno1]['password']) {
        if (amount<=userdetails[acno1]['balance']){
          userdetails[acno1]['balance']-=amount

          userdetails[acno1]['transaction'].push({type:'DEBIT',amount})

          return userdetails[acno1]['balance']
        }
        else{
          alert('insufficinet balance')
          return false
        }

    }
    else{
      alert('incorrect passwd')
      return false
    }

    }
    else{
      alert('incorrect username')
      return false
    }
  }

  gettransaction(acno:any){
    return this.userdetails[acno]['transaction']

  }
}