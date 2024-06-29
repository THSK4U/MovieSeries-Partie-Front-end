import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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
  route = inject(ActivatedRoute);
  Favorite: any = [];
  testId: string | undefined;


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.testId = params['id'];
      console.log('Test ID:', this.testId);
      this.http.delete('http://localhost:8088/api/favorite/Delete/'+this.testId)
      .subscribe((favorite: any) => {
        this.Favorite = favorite;
      });
    });
    this.fetchFavorites();
  }

  fetchFavorites(): void {
    this.http.get('http://localhost:8088/api/favorite/1')
      .subscribe((favorite: any) => {
        this.Favorite = favorite;
      });
  }
}