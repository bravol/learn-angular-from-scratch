import { Component, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-signals-example';

  // setting signal
  theme = signal('light');
  label = this.theme();

  constructor() {
    // whenever the signal value changes effect will get executed
    effect(() => {
      this.label = this.theme();
    });
  }

  toggleDarkMode() {
    this.theme.update((currentValue) =>
      currentValue === 'light' ? 'dark' : 'light'
    );
  }
}
