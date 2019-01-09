import {Component, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'tab-content',
  templateUrl: 'tab-content.component.html'
})
export class TabContentComponent {
  @ViewChild(TemplateRef) tabContentRef: TemplateRef<TabContentComponent>;
}
