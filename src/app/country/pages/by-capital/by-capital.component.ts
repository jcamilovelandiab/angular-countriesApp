import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent implements OnInit {

  countries: Country[] = [];
  existsError: boolean = false;
  searchTerm: string = '';

  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
  }

  search( searchTerm: string ) {
    this.existsError = false;
    this.searchTerm = searchTerm;
    this.countryService.searchCountryByCapital(this.searchTerm)
      .subscribe( response => {
        this.countries = response;
      }, error => {
        this.existsError = true;
        this.countries = [];
      });
  }

}
