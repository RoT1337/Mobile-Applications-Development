import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCompComponent } from '../header-comp/header-comp.component';

@NgModule({
  declarations: [HeaderCompComponent],
  imports: [CommonModule],
  exports: [HeaderCompComponent]
})
export class SharedModule {}