import {Component, OnInit} from '@angular/core';
import {Product,products } from '../products';
import {categories} from '../categories';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
// export class CategoryComponent implements OnInit{
//   ngOnInit() {
//     // First get the product id from the current route.
//     const routeParams = this.route.snapshot.paramMap;
//     const productIdFromRoute = Number(routeParams.get('productId'));
//
//     // Find the product that correspond with the id provided in route.
//     this.product = products.find(product => product.id === productIdFromRoute);
//   }
//   product: Product | undefined;
//
//   constructor(private route: ActivatedRoute) { }
//
//
//
//
// }
export class  CategoryComponent implements OnInit{
  categories = categories;
  choice = '';
  products=products;
  // newItem: Product[];

  // constructor() {
  //   this.newItem = this.products;
  //   // this.currentTask = new Task('');
  // }
  ngOnInit(): void {
  }
  selectItem(name:string) {
    this.choice = name;
  }
  // onNewItemRemove(index: number) {
  //   this.products = this.products.filter((x) => x.id !== index);
  // }

}
