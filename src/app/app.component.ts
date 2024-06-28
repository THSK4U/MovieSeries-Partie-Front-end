import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostComponent, HttpClientModule, CommonModule],  // Ensure CommonModule is imported here too
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project Title';
}
