import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EkaizenFormModule} from "./forms/form.module";

@NgModule({
  imports: [CommonModule, EkaizenFormModule],
  exports: [EkaizenFormModule]
})
export class UiModule {}
