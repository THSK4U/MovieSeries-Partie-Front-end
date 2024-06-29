import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

  title = 'favorite';

  http = inject(HttpClient);
  Favorite: any = [];

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.http.get('http://localhost:8088/api/favorite/1')
      .subscribe((favorite: any) => {
        console.log(favorite)
        this.Favorite = favorite;
      });
  }
}