import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, RouterLink, RouterOutlet],
  template: `
    <main class="h-full grid grid-rows-[auto_1fr]">
      <a [routerLink]="['/']">
        <header class="brand-name flex items-center gap-1">
          <img
            class="brand-logo max-w-14"
            src="/assets/home.svg"
            alt="logo"
            aria-hidden="true"
          />
          <span class="text-4xl font-semibold">Homes</span>
        </header>
      </a>
      <section class="content bg-slate-100">
        <router-outlet ></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
  host: {
    class: 'app-root',
  },
})
export class AppComponent {
  title = 'homes';
}
