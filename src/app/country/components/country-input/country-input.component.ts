import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {

  @Input()
  placeholder: string = '';

  @Output()
  onEnter: EventEmitter<string> = new EventEmitter();

  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300) //do not emit the subscribe function until the observable "debouncer" stops emitting values for the next 300ms
      )
      .subscribe( value => {
        this.onDebounce.emit( value );
      });
  }

  search() {
    this.onEnter.emit(this.searchTerm);
  }

  pressedKey() {
    this.debouncer.next(this.searchTerm);
  }

}
