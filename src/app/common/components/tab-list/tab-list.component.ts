import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})
export class TabListComponent {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent<any>>;

  @Output()
  removeTab: EventEmitter<number> = new EventEmitter<number>();

  /**
   * @description Check if the title is a string
   * @param title a string or template to be displayed as title of tab
   */
  public isString(title: string | TemplateRef<any>): boolean {
    return typeof title === "string";
  }

  /**
   * @description Allow to change active tab on click
   * @param clickedTabIndex index of selected tab by user
   */
  public selectTab(clickedTabIndex: number): void {
    this.tabs.toArray().forEach((tab, index) => {
      tab.active = index === clickedTabIndex;
    });
  }

  /**
   * @description allow to close the tab on click
   * @param clickedTabIndex index of selected tab by user
   * @param event pointer event click
   */
  public closeTab(clickedTabIndex: number, event: PointerEvent) {
    event.stopPropagation(); //prevent to propagate click to activate tab
    this.removeTab.emit(clickedTabIndex);
  }

}
