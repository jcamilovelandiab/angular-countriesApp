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

  searchTerm: string = '';
  existsError: boolean = false;
  countries: Country[];

  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
  }

  search() {
    this.existsError = false;
    this.countryService.searchCountry(this.searchTerm)
      .subscribe( response => {
        console.log(response);
        this.countries = response;
      }, error => {
        this.existsError = true;
        this.countries = [];
      });
  }

}
