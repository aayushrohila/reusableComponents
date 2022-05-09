import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFilterComponent } from './list-filter/list-filter.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';
import { AppSortDirective } from './directives/app-sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListFilterComponent,
    FilterSearchComponent,
    AppSortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
