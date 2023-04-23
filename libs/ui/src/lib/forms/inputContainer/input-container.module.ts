import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EkaizenInputContainerComponent} from "./input-container.component";

@NgModule({
  imports: [CommonModule],
  declarations: [EkaizenInputContainerComponent],
  exports: [EkaizenInputContainerComponent]
})
export class EkaizenInputContainerModule {}
