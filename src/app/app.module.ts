import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomdDirective } from './customd.directive';
import { RngifDirective } from './rngif.directive';
import { TestModule } from './test/test.module';


@NgModule({
  declarations: [
    AppComponent,
    CustomdDirective,
    RngifDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TestModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
