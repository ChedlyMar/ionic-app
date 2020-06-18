import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  recipes:{ id: string, title: string, imageUrl: string, ingredients:string[] } [] ;

  constructor() {
  this.recipes = [
      {
        id: 'r1',
        title: 'Schnitzel',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
        ingredients: ['French Fries', 'Pork Meat', 'Salad']
      },
      {
        id: 'r2',
        title: 'Spaghetti',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/1024px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
        ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
      }
    ];
  }

}
