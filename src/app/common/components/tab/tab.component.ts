import { Component, ElementRef, Input, TemplateRef, Type, inject } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent<Type> {

  @Input()
  title: string | TemplateRef<any>; //to put a string or a template as title of tab

  @Input()
  content: TemplateRef<any>; //to put a template as the content of tab

  @Input()
  singleData: Type; //to pass data to a template content

  elementRef = inject(ElementRef); //use of elementRef to display or not tab
}
