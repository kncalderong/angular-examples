import { Component } from '@angular/core';
import { HEROES } from 'src/assets/hero';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css'],
})
export class HeroParentComponent {
  heroes = HEROES;
  master = 'master';
}
