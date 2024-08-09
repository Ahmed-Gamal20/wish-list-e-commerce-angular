import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

 

  private favorites: Set<number> = new Set();
  private favoriteCount = new BehaviorSubject<number>(0);

  // --------------------------------------------------------------------



  // now
  private storageKey = 'favoriteProducts';

  // now
  constructor() {
    if (this.isBrowser()) {
      this.loadFavoritesFromStorage();
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  private loadFavoritesFromStorage() {
    const storedFavorites = localStorage.getItem(this.storageKey);
    if (storedFavorites) {
      this.favorites = new Set(JSON.parse(storedFavorites));
      this.updateFavoriteCount();
    }
  }


  private saveFavoritesToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(Array.from(this.favorites)));
  }





  // ----------------------------------------------------------------------------------

  addFavorite(productId: number) {
    this.favorites.add(productId);
    this.updateFavoriteCount();
    // now
    this.saveFavoritesToStorage();
  }

  removeFavorite(productId: number) {
    this.favorites.delete(productId);
    this.updateFavoriteCount();
    // now
    this.saveFavoritesToStorage();
  }

  getFavorites(): number[] {
    return Array.from(this.favorites);
  }

  isFavorite(productId: number): boolean {
    return this.favorites.has(productId);
  }
  getFavoriteCount() {
    return this.favoriteCount.asObservable();
  }
  private updateFavoriteCount() {
    this.favoriteCount.next(this.favorites.size);
  }
}
