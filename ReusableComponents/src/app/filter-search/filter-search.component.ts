import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.scss']
})
export class FilterSearchComponent implements OnInit {

  @Input('listItems') items: any;
  @Output() filteredItems = new EventEmitter();

  searchString: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  _filteredItems() {
    this.trimSearchString();
    let filteredItems =  this.items.filter((element: any) => {
      let booleanArray: boolean[] = [];
      booleanArray = Object.keys(element).map((el) => {
        return element[el].toLowerCase().includes(this.searchString.toLowerCase())? true: false;
      });
      return booleanArray.includes(true);
    });
    this.filteredItems.emit(filteredItems);
  }

  trimSearchString() {
    this.searchString = this.searchString.trim();
  }


  clearSearchFilter() {
    this.searchString = "";
    this._filteredItems();
  }

}
