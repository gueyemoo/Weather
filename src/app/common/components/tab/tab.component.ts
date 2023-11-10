import { Component, Input, TemplateRef, Type } from '@angular/core';

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

  @Input()
  active = false;

}
