import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {

  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    
  }

}
