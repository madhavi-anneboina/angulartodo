import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomdDirective } from './customd.directive';
import { RngifDirective } from './rngif.directive';
import { TestModule } from './test/test.module';
import { LazyModule } from './lazy/lazy.module';

const routes : Routes = [
{
  path:"lazyc1",
  loadChildren : () =>{
    import('./lazy/lazy.module').then((m)=>m.LazyModule)
  }
}
]

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
    TestModule,
     LazyModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
