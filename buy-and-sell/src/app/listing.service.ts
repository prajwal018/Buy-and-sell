import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from './types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  constructor(private http: HttpClient) {}

  getListing(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listing');
  }

  getListingById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`/api/listing/${id}`);
  }

  addViewToListing(id: string): Observable<Listing> {
    return this.http.post<Listing>(
      `/api/listing/${id}/add-view`,
      {},
      httpOptions
    );
  }

  getListingForUser(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/user/12345/listing');
  }

  deleteListing(id: String): Observable<any> {
    return this.http.delete(`/api/listing/${id}`);
  }
}
