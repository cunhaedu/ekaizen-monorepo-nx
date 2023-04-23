import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EkaizenButtonModule} from "./button/button.module";
import {EkaizenInputModule} from "./input/input.module";

@NgModule({
  imports: [CommonModule, EkaizenButtonModule, EkaizenInputModule],
  exports: [EkaizenButtonModule, EkaizenInputModule]
})
export class EkaizenFormModule {}
