import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
    <main class="h-full grid grid-rows-[auto_1fr]">
      <header class="brand-name flex items-center gap-1">
        <img
          class="brand-logo max-w-14"
          src="/assets/home.svg"
          alt="logo"
          aria-hidden="true"
        />
        <span class="text-4xl font-semibold">Homes</span>
      </header>
      <section class="content bg-slate-100">
        <app-home></app-home>
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
