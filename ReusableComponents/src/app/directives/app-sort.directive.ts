import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSort]'
})
export class AppSortDirective {

  @Input('appSort') appSort: any;
  constructor(private elementRef: ElementRef) { }

  @HostListener('click') sortData() {
    const ele = this.elementRef.nativeElement;
    const order = ele.getAttribute('order');
    const criteria = ele.getAttribute('data-name');
    if(order === 'asc') {
      this.appSort = this.appSort.sort((a: any,b: any) => (a[criteria]>b[criteria])?1:-1);
      ele.setAttribute('order', 'desc');
    } else if(order === 'desc') {
      this.appSort = this.appSort.sort((a: any,b: any) => (a[criteria]>b[criteria])?-1:1);
      ele.setAttribute('order', 'asc');
    }
  }


}
