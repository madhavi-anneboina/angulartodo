import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsercardComponent } from './usercard/usercard.component';



const routes: Routes = [
  // ... other routes
  { path: 'usercard/:id', component: UsercardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
