import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  getQuote() {
    return this.http.request('GET', 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/CVG/LAX/2019-02?inboundpartialdate=2019-02', {
      headers: { "X-RapidAPI-Key": "3XgcnCFK0YmshRWsYAfkSra7IxgLp1IgyFIjsnlBUVVjvRZTFi" }
    });
  }
}
