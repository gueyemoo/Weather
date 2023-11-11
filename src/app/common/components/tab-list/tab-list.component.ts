import { AfterContentChecked, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})
export class TabListComponent implements AfterContentChecked {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent<any>>;

  @Input()
  selectedTab: number;

  @Output()
  selectedTabChange = new EventEmitter<number>();

  @Output()
  removeTab: EventEmitter<number> = new EventEmitter<number>();

  /**
   * @description Check if the input is a string
   * @param input
   */
  public isString(input: string): boolean {
    return typeof input === "string";
  }

  /**
   * @description Update selectedTab and notify parent of changes
   * @param clickedTabIndex index of selected tab by user
   */
  public selectTab(clickedTabIndex: number): void {
    this.selectedTab = clickedTabIndex;
    this.selectedTabChange.emit(clickedTabIndex);
  }

  /**
   * @description allow to close the tab on click
   * @param clickedTabIndex index of selected tab by user
   */
  public closeTab(clickedTabIndex: number) {
    this.removeTab.emit(clickedTabIndex);
  }

  /**
   * @description Update visually which tab to show or not based on the selectedTab index
   */
  ngAfterContentChecked(): void {
    if (this.tabs && this.tabs.length) {
      const selectedTabIndex = this.selectedTab;
      this.tabs.forEach((tab, tabIndex) => {
        const style = tab.elementRef.nativeElement.style;
        style.display = tabIndex === selectedTabIndex ? "block" : "none";
      });
    }
  }
}
