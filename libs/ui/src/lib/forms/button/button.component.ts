import { FocusMonitor } from '@angular/cdk/a11y';
import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewEncapsulation
} from '@angular/core';
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;

@Component({
  selector: '[ek-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  host: {
    '[class.primary]': 'variant === "primary"',
    '[class.secondary]': 'variant === "secondary"',
    '[class.tertiary]': 'variant === "tertiary"',
    '[class.size-sm]': 'size === "sm"',
    '[class.size-md]': 'size === "md"',
    '[class.size-lg]': 'size === "lg"',
    '[class.full]': '!!full',
    '[class.loading]': '!!loading',
  }
})
export class EkaizenButtonComponent implements OnInit, OnDestroy {
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Input() full = false;

  @Input() loading = false;

  constructor(
    private readonly _elementRef: ElementRef<HTMLButtonElement>,
    private readonly _focusMonitor: FocusMonitor,
  ) {}

  ngOnInit(): void {
    this._focusMonitor.monitor(this._elementRef);
  }

  ngOnDestroy(): void {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  protected readonly Simulate = Simulate;
  protected readonly load = load;
}
