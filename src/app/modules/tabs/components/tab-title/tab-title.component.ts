import {Component, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'tab-title',
  templateUrl: 'tab-title.component.html'
})
export class TabTitleComponent {
  @ViewChild(TemplateRef) tabTitleRef: TemplateRef<TabTitleComponent>;
}
