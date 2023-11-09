import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})
export class TabListComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  @Output()
  removeTab = new EventEmitter<number>();

  ngAfterContentInit() { //TODO: fix using index instead of boolean
    // const activeTabs = this.tabs.filter(tab => tab.active);

    // if (activeTabs.length === 0) {
    //   this.selectTab(this.tabs.first);
    // }
  }

  selectTab(tab: TabComponent) {
    if (tab) {
      this.tabs.forEach(tab => (tab.active = false));
      tab.active = true;
    }
  }

  closeTab(event: PointerEvent, clickedTabIndex: number) {
    event.stopPropagation(); //prevent to propagate click to activate tab
    if (clickedTabIndex > 0) {
      const newActiveTab = this.tabs[clickedTabIndex - 1];
      this.selectTab(newActiveTab)
    }
    this.removeTab.emit(clickedTabIndex);
  }

}
