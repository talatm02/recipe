import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ListComponent } from './components/list/list.component';
import { ListRowComponent } from './components/list/list-row/list-row.component';
import { RecipeDetailsComponent } from './components/recipe/recipe-details/recipe-details.component';
import { ShoppingDetailsComponent } from './components/shopping/shopping-details/shopping-details.component';
import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';
import { ButtonSaveComponent } from './components/buttons/button-save/button-save.component';
import { BasicHilightDirective } from './directives/basic-hilight.directive';
import { BetterHilightDirective } from './directives/better-hilight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ShoppingComponent,
    RecipeComponent,
    ListComponent,
    ListRowComponent,
    RecipeDetailsComponent,
    ShoppingDetailsComponent,
    RecipeListComponent,
    ButtonSaveComponent,
    BasicHilightDirective,
    BetterHilightDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
