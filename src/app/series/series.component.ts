import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss'
})
export class SeriesComponent {
    title = 'series';
  
  http = inject(HttpClient);
  series: any = [];

  ngOnInit(): void {
    this.fetchSeries();
  }

  fetchSeries(): void {
    this.http.get('http://localhost:8088/api/series')
      .subscribe((series: any) => {
        this.series = series;
      });
  }
//CORS ??

  addToFavorites(movieId: number | null, seriesId: number | null, userId: number) {
    const favorite = {
      movieId: movieId,
      seriesId: seriesId,
      utilisateurID: userId
    };

    this.http.post('http://127.0.0.1:8088/api/favorite', favorite)
      .subscribe(response => {
        console.log('favorites:', response);
      });
  }
}
