import { Component } from '@angular/core';
import { PostComponent } from './Movies/post.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series/series.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostComponent, HttpClientModule, CommonModule,SeriesComponent,RouterModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project Title';
}
