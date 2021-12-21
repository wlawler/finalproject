import { Observable } from 'rxjs';
import {distinctUntilChanged,  map} from 'rxjs/Operators';
import { BehaviorSubject } from 'rxjs';
import { User} from './auth/shared/services/auth/auth.service'

export interface State {
  user: User
  [key: string]: any
}

const state: State = {
  user: undefined
};

export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(map(x => x?.name));
      
    
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }

}
