import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];

  constructor( private countryService: CountryService ) { }
  
  activateRegion( region: string ) {
    if( region === this.activeRegion ) return;
    this.activeRegion = region;
    this.countryService.searchCountryByRegion( region )
      .subscribe(( countries )=> this.countries = countries );
  }

  getCSSClass( region: string ){
    return (region === this.activeRegion) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

}
