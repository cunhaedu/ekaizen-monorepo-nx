import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EkaizenButtonComponent} from "./button.component";

@NgModule({
  imports: [CommonModule],
  declarations: [EkaizenButtonComponent],
  exports: [EkaizenButtonComponent]
})
export class EkaizenButtonModule {}
