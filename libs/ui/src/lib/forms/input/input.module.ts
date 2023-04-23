import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EkaizenInputComponent} from "./input.component";

@NgModule({
  imports: [CommonModule],
  declarations: [EkaizenInputComponent],
  exports: [EkaizenInputComponent]
})
export class EkaizenInputModule {}
