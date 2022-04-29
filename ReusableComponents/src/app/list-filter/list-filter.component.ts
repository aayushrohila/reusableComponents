import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit {

  items = [{name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John Lewinski", place: "Noida", animal: "Cat", thing: "Something1"},
  {name: "Joane", place: "Noida", animal: "Mouse", thing: "Something2"},
  {name: "Jane", place: "Noida", animal: "Elephant", thing: "Cane"},
  {name: "Sneha", place: "Noida", animal: "Tiger", thing: "Liger"},
  {name: "Meha", place: "Noida", animal: "Tiger", thing: "Liger"},
  {name: "Aayush", place: "Noida", animal: "Lion", thing: "Bone"},
  {name: "Aayushi", place: "Noida", animal: "Dolphin", thing: "Bone"},
  {name: "John Pewinski", place: "Noida", animal: "Eagle", thing: "Bone"},
  {name: "John Mewinski", place: "Noida", animal: "Cow", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  {name: "John", place: "Noida", animal: "Dog", thing: "Bone"},
  ];
  _filteredItems: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this._filteredItems = this.items;
  }

  filteredItems(filteredList: any) {
    this._filteredItems = filteredList;
  }

  sortBy(criteria: string) {
    let ele: any = document.getElementById(criteria);
    let order = ele?.getAttribute('order');
    if(order === 'asc') {
      this._filteredItems = this._filteredItems.sort((a,b) => (a[criteria]>b[criteria])?1:-1);
      ele.setAttribute('order', 'desc');
    } else if(order === 'desc') {
      this._filteredItems = this._filteredItems.sort((a,b) => (a[criteria]>b[criteria])?-1:1);
      ele.setAttribute('order', 'asc');
    }
  }


}
