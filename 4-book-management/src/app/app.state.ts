import { Book } from './models/book';

export interface AppState {
  readonly book: Book[];
}

// ng g i app.state
