import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardPageComponent } from './card-page/card-page.component';
import { VideoListComponent } from './video-list/video-list.component';


const routes: Routes = [

  {path:'',component:VideoListComponent},
  {path:'video/:id',component:CardPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }