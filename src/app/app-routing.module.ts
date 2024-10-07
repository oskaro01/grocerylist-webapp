import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrocerylistComponent } from './grocerylist/grocerylist.component';
import { EditlistComponent } from './editlist/editlist.component';
import { NewlistComponent } from './newlist/newlist.component';


const routes: Routes = [
  { path:'', redirectTo: '/Mylist', pathMatch:'full' },
  { path:'Mylist', component: GrocerylistComponent, pathMatch:'full' },

  { path:'Editlist/:id', component: EditlistComponent },
  { path:'Newlist', component: NewlistComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
