import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1/test1.component';



@NgModule({
  declarations: [
    Test1Component
  ],
  imports: [
    CommonModule
  ],
  exports :[
    Test1Component
  ]
})
export class TestModule { }
