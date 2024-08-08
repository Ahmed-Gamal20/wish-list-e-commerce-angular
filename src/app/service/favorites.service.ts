import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }

  private favorites: Set<number> = new Set();

  addFavorite(productId: number) {
    this.favorites.add(productId);
  }

  removeFavorite(productId: number) {
    this.favorites.delete(productId);
  }

  getFavorites(): number[] {
    return Array.from(this.favorites);
  }

  isFavorite(productId: number): boolean {
    return this.favorites.has(productId);
  }
}
