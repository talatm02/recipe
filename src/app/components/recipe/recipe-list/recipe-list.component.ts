import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[];
  @Output() onSave =  new EventEmitter<any>();
  @Output() onSelect = new EventEmitter<any>();

  
  constructor() { 
    console.log("Constructor called[recipelist]");    
  }

  ngOnInit() {
    console.log("Init called[recipelist]");        
  }

  onClick(recipe) {
    this.onSelect.emit(recipe);
  }

  onSaveClick(recipeObj:any){
    console.log("rcl", recipeObj);    
    this.onSave.emit(recipeObj);
  }

}
