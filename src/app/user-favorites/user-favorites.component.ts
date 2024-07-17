import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { job } from '../alljob.model';
import { JobService } from '../alljobs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [NgFor, CommonModule, NgIf],
  templateUrl: './user-favorites.component.html',
  styleUrl: './user-favorites.component.css'
})
export class UserFavoritesComponent implements OnInit {

  alljobs: job[] = []
  FavSelected: boolean = false;
  constructor(private router: Router, private service: JobService) { }

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    const sessionVariable = sessionStorage.getItem('favouriteJob');
    if (sessionVariable) {
      this.FavSelected = true;
      this.alljobs = JSON.parse(sessionVariable);
    }
    if (this.alljobs.length == 0) {
      this.FavSelected = false;
    }
  }

}
