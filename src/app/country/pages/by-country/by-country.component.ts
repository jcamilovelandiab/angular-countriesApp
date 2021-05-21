import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  countries: Country[] = [];
  existsError: boolean = false;
  searchTerm: string = '';

  constructor( private countryService: CountryService ) { }

  search( searchTerm: string ) {
    this.existsError = false;
    this.searchTerm = searchTerm;
    this.countryService.searchCountry(this.searchTerm)
      .subscribe( response => {
        this.countries = response;
      }, error => {
        this.existsError = true;
        this.countries = [];
      });
  }

  suggestion( term: string ) {
    console.log(term);
    this.existsError = false;
  }

}
