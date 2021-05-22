import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class ByCountryComponent {

  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

  existsError: boolean = false;
  searchTerm: string = '';

  constructor( private countryService: CountryService ) { }

  search( searchTerm: string ) {
    this.showSuggestions = false;
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
    this.existsError = false;
    this.showSuggestions = true;
    this.searchTerm = term;
    this.countryService.searchCountry(term)
      .subscribe(
        countries => this.suggestedCountries = countries.splice(0,5),
        (error) => this.suggestedCountries = []
      );
  }

}
