import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomdDirective } from './customd.directive';
import { RngifDirective } from './rngif.directive';
// import { TestModule } from './test/test.module';
import { LazyModule } from './lazy/lazy.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PopupComponent } from './popup/popup.component';
import { ToggleComponent } from './toggle/toggle.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { LoadingComponent } from './loading/loading.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { WebsiteComponent } from './website/website.component';
import { ChildComponent } from './child/child.component';
import { TestService } from './test.service';
import { UsersComponent } from './users/users.component';
import { UsercardComponent } from './usercard/usercard.component';
import { UserService } from './user.service';





const routes: Routes = [
  // {
  //   path: '', redirectTo:"/home",pathMatch:'full'
    
  // },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  
  // {
  //   path: 'usercard/:id',
  //   component: UsercardComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'about',
  //   component: AboutComponent,
  // },
  // {
  //   path: 'contact',
  //   component: ContactComponent,
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    CustomdDirective,
    RngifDirective,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TodoComponent,
    TodolistComponent,
    ProductsComponent,
    PopupComponent,
    ToggleComponent,
    DropdownComponent,
    CheckboxComponent,
    LoadingComponent,
    HeaderComponent,
    LoginComponent,
    ContactusComponent,
    ProductListComponent,
    ProductCardComponent,
    ChatWindowComponent,
    MessageInputComponent,
    RegistrationFormComponent,
    WebsiteComponent,
    ChildComponent,
    UsersComponent,
    UsercardComponent,
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // TestModule,
    LazyModule,
     RouterModule.forRoot(routes),
    // RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule
    

  ],
  exports :[
    ChatWindowComponent
  ],
  providers: [TestService,UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
