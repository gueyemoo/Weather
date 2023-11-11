import { Component, ElementRef, Input, TemplateRef, Type, inject } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent<Type> {

  @Input()
  title: string | TemplateRef<any>;

  @Input()
  content: TemplateRef<any>;

  @Input()
  singleData: Type;

  elementRef = inject(ElementRef); //use pf elementRef to display or not tab
}
