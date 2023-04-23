import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[ek-input-container]',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EkaizenInputContainerComponent {
  @Input() suffix?: string;
  @Input() prefix?: string;
}
