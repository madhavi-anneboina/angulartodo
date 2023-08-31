import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1/test1.component';
import { TestPipe } from '../test.pipe';



@NgModule({
  declarations: [
    Test1Component,
    TestPipe
  ],
  imports: [
    CommonModule
  ],
  exports :[
    Test1Component
  ]
})
export class TestModule { }
