import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title = 'Movies';

  http = inject(HttpClient);
  movies: any = [];

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.http.get('http://localhost:8088/api/movies')
      .subscribe((movies: any) => {
        this.movies = movies;
      });
  }

//CORS ??

  addToFavorites(movieId: number | null, seriesId: number | null, userId: number) {
    const favorite = {
      movieId: movieId,
      seriesId: seriesId,
      utilisateurID: userId
    };

    this.http.post('http://localhost:8088/api/favorite', favorite).subscribe(response => {
        console.log('favorites:', response);
      });
  }
}
