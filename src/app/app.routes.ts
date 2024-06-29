import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './series/series.component';
import { PostComponent } from './Movies/post.component';
import { NgModule } from '@angular/core';
import { FavoritesComponent } from './favorites/favorites.component';

export const routes: Routes = [
   {
    path:"Movies",
    component:PostComponent
   },
   {
    path:"series",
    component:SeriesComponent
   },
   {
    path:"favorite",
    component:FavoritesComponent
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }