import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FavoritesService } from '../../service/favorites.service';
// import { Router } from 'express';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  favoriteCount: number = 0;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.favoritesService.getFavoriteCount().subscribe(count => {
      this.favoriteCount = count;
    });
  }

}
