import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

 @Input() item:string|undefined
//  @ means decorator
//  @inut() is used to hold data from the parent component

@Output() onCancel=new EventEmitter();
// for when no is clicked the deposit and withrawal comes back
// oncancel is userdefined
  
  
  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
   this.onCancel.emit();
  }

}
