import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private httpClient: HttpClient ) {  }

  get httpParams () {
    return new HttpParams()
      .set('fields', 'name;capital;alpha2Code;flag;population');
  }

  searchCountry(searchTerm: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${searchTerm}`;
    return this.httpClient.get<Country[]>( url, { params: this.httpParams } );
  }

  searchCountryByCapital(searchTerm: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${searchTerm}`;
    return this.httpClient.get<Country[]>(url, { params: this.httpParams });
  }

  getCountryByCode( countryCode: string ): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${countryCode}`;
    return this.httpClient.get<Country>(url);
  }

  searchCountryByRegion( region: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.httpClient.get<Country[]>(url, { params: this.httpParams });
  }

}
