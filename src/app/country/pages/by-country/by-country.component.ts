import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent implements OnInit {

  countries: Country[] = [];
  existsError: boolean = false;
  searchTerm: string = '';

  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
  }

  search( searchTerm: string ) {
    this.existsError = false;
    this.searchTerm = searchTerm;
    console.log(searchTerm);
    this.countryService.searchCountry(this.searchTerm)
      .subscribe( response => {
        this.countries = response;
      }, error => {
        this.existsError = true;
        this.countries = [];
      });
  }

}
