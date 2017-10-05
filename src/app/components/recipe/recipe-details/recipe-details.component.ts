import { Component, Input, Output, ViewChild, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  @ViewChild('inputName') inputNameRef: ElementRef;
  @ViewChild('inputDescription') inputDescriptionRef: ElementRef;
  @Output() onSave = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSaveClick() {
    const name = this.inputNameRef.nativeElement.value;
    const desc = this.inputDescriptionRef.nativeElement.value;
    const recipe = new Recipe(name,desc,"");

    this.onSave.emit(recipe);
    
  }

}
