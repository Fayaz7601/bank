import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // redundant data
  userdetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:0},
    1001:{acno:1001,username:"anu",password:123,balance:0},
    1002:{acno:1002,username:"arun",password:123,balance:0},
    1003:{acno:1003,username:"mega",password:123,balance:0}
   }
    // when a new user registers we have to add his details here along with the rest,this cant be done in the
    // register ts file,so we give all the code here and call the mthod in register ts file
    // all the logic[code]that has direct connection[add,delete,etc] with database is creted in side Dataservice
    // 8-11-22  [from 1hr 10 mins]

  constructor() { }
   
  register(acno:any,username:any,password:any){
  //  these acno,username,pass are coming from the input box of registration page [user input]
     var userdetails=this.userdetails
   // now we have check if the details enterd by user alreaady exists in the datbase [userdetails]
   if(acno in userdetails){
    return false
   }
  //  is we use return in if in else also we must use return
   else{
    // we have to add the details to the database
    // first add the acno,since key and value are same here ust give directly as shown,now acno,name and pass will add
    userdetails[acno]={acno,username,password,balance:0}
    return true
    // now call it in register ts file
   }
  }

  login(acno:any,psw:any){
    // logic for login page like registrtaion given above
    // call this logic in login
    var userdetails=this.userdetails
    
    if(acno in userdetails){
    if(psw==userdetails[acno]['password']){
      return true
     
    }
    else{
      alert('incorrect password')
      return false
    }
    }
    else{
      alert('user does not exist')
      return false
    }
    
    }
}

