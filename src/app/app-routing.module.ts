import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  /*{ path: 'home', loadChildren: './home/home.module#HomePageModule' },*/
    { path: 'movies/:id', loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule' },
    { path: 'movies', loadChildren: './pages/movies/movies.module#MoviesPageModule' },
  { path: 'movie-details', loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
