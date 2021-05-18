import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent implements OnInit {

  searchTerm: string = '';
  existsError: boolean = false;

  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
  }

  search() {
    this.existsError = false;
    this.countryService.searchCountry(this.searchTerm)
      .subscribe( response => {
        console.log(response);
      }, error => {
        this.existsError = true;
      });
  }

}
