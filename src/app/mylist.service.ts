import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Listing } from './types';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class MylistService {

  constructor(
    private http: HttpClient,
  ) { }

  getListing(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/Mylist'); //making request to our server
  }

  getListingById(id:string): Observable<Listing>{
    return this.http.get<Listing>(`/api/Mylist/${id}`);
  }
  // method

  deleteMylist(id:string): Observable<any>{
    return this.http.delete(`/api/Mylist/${id}`);  } 



  newList(name: string, quantity:string, price: number): Observable<Listing> {

      return this.http.post<Listing>(
        '/api/Mylist',
        { name, quantity, price},
        httpOptions,
      );
    }

    editList(id: string, name: string, quantity:string, price: number): Observable<Listing>{

      return this.http.post<Listing>(
        `/api/Mylist/${id}`,
        { name, quantity, price},
        httpOptions,
      );
    }
}
