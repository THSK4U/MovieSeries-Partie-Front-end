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

  http = inject(HttpClient);
  movies: any = [];
  series: any = [];

  ngOnInit(): void {
    this.fetchMovies();
    this.fetchSeries();
  }

  fetchMovies(): void {
    this.http.get('http://localhost:8088/api/movies')
      .subscribe((movies: any) => {
        console.log(movies);
        this.movies = movies;
      });
  }
  fetchSeries(): void {
    this.http.get('http://localhost:8088/api/series')
      .subscribe((series: any) => {
        console.log(series);
        this.series = series;
      });
  }

}
