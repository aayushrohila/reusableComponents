import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit {

  searchString: string = "";
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

  constructor() { }

  ngOnInit(): void { }

  get _filteredItems() {
    this.trimSearchString();
    let filteredItems =  this.items.filter((element: any) => {
      let booleanArray: boolean[] = [];
      booleanArray = Object.keys(element).map((el) => {
        return element[el].toLowerCase().includes(this.searchString.toLowerCase())? true: false;
      });
      return booleanArray.includes(true);
    });
    return filteredItems;
  }

  trimSearchString() {
    this.searchString = this.searchString.trim();
  }


  clearSearchFilter() {
    this.searchString = "";
  }

}
