import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';
import { zip } from 'rxjs';
import { Item } from './app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
  private _listFilter: string = '';
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredInventory = this.performFilter(value);
  }
  filteredInventory: Item[] = [];
  inventory: Item[] = [
    {
      "id": 1,
      "name": "Fries",
      "description": "Salty and hot as hell",
      "inStock": 5,
      "price": 2.99,
      "image": "assets/fries.jpeg",
      "featured": false,
      "qty":0,
      "brand":"McDonalds",
      "message": ""
    },
    {
      "id": 2,
      "name": "Soda",
      "description": "Cold",
      "inStock": 15,
      "price": 1.99,
      "image": "assets/soda.jpg",
      "featured": true,
      "qty":0,
      "brand":"Coca Cola",
      "message": ""

    },
    {
      "id": 3,
      "name": "Hamburger",
      "description": "Savory",
      "inStock": 25,
      "price": 4.99,
      "image": "assets/burger.webp",
      "featured": false,
      "qty":0,
      "brand":"Burger King",
      "message": ""

    }
  ];
  "Cart" = 0; 


  totalInventory(){
    let sum =0;
    for(let x of this.inventory){
      sum = sum + x.inStock;
    }
    return sum;
  }

  increaseQty(inventory: any){
    if(inventory.qty < inventory.inStock){
      inventory.qty++;
    }
  }
  decreaseQty(inventory: any){
    if(inventory.qty>0){
      inventory.qty--;
    }
  }
  totalInCart(){
    let cart = 0;
    for(let x of this.inventory){
      cart = cart + x.qty
    }
    return cart;
  }
  totalPrice(){
    let total = 0;
    for(let x of this.inventory){
      total = total + (x.price * x.qty)
    }
    return total;
  }
  performFilter(filterBy: string): Item[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.inventory.filter((item:Item) =>
    item.name.toLocaleLowerCase().includes(filterBy));
  }
  ngOnIt():void{
    this._listFilter = 'cart';
  }
  // addMessage(){
  //   for(let x of this.inventory){
  //     if(x.qty === 0){
  //       x.message = 'No ' + x.name + '?';
  //     }
  //     else if(x.qty > 0){
  //       x.message = 'Enjoy our ' + x.name;
  //     }
  //   }
  // }



}

