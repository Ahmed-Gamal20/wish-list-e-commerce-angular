import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FavoritesComponent } from "./component/wish/wish.component";
import { NavbarComponent } from "./screen/navbar/navbar.component";
import { FooterComponent } from "./screen/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FavoritesComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wish';
}
