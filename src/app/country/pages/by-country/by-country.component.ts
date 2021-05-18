import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent implements OnInit {

  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    console.log(this.searchTerm);
  }

}
