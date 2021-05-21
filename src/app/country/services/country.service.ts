import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private httpClient: HttpClient ) {  }

  searchCountry(searchTerm: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${searchTerm}`;
    return this.httpClient.get<Country[]>( url );
  }

  searchCountryByCapital(searchTerm: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${searchTerm}`;
    return this.httpClient.get<Country[]>(url);
  }

  getCountryByCode( countryCode: string ): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${countryCode}`;
    return this.httpClient.get<Country>(url);
  }

  searchCountryByRegion( region: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.httpClient.get<Country[]>(url);
  }

}
