import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EkaizenButtonModule} from "./button/button.module";

@NgModule({
  imports: [CommonModule, EkaizenButtonModule],
  exports: [EkaizenButtonModule]
})
export class EkaizenFormModule {}
