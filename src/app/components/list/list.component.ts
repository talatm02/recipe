import { Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() heading: string = '';
  @Input('buttonLabel') label: string = 'Save';
  @Output() onSave =  new EventEmitter<any>();

  constructor() { 
    console.log("Constructor called");
  }

  ngOnInit() {
    console.log("Init called");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("onchange called", changes);    
  }

  onSaveClick(recipeObj:any){
    console.log("list", recipeObj);
    this.onSave.emit(recipeObj);
  }

}
