import { Component, OnInit, OnChanges } from '@angular/core';
import { Recipe } from './recipe.model'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnChanges {
  recipes: Recipe[] = [
    new Recipe('Biryani', 'Mutton biryani is Hydrabadi dish', 'https://www.ndtv.com/cooks/images/hyderabadi%20biryani%20new.jpg'),
    new Recipe('Pulao', 'Mutton pulao is Raipur dish', 'https://www.ndtv.com/cooks/images/hyderabadi%20biryani%20new.jpg')
  ];
  selectedRecipe: Recipe;
  
  constructor() { 
    console.log("Constructor called[recipe]");    
  }

  ngOnInit() {
    console.log("Init called[recipe]");        
  }

  ngOnChanges() {
    console.log("Onchanges called");
  }

  onSelect(recipe) {
    this.selectedRecipe = recipe;
  }

  onSave(recipeObj:any) {
    // console.log("rc",recipeObj);
    this.recipes.push(recipeObj)
  }


}
