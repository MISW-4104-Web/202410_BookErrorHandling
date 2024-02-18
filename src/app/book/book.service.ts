import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from './../../environments/environment.development';
import { Observable, catchError, throwError } from 'rxjs';
import { BookDetail } from './bookDetail';


@Injectable({
 providedIn: 'root'
})
export class BookService {


 private apiUrl: string = environment.baseUrl + 'books';


 constructor(private http: HttpClient) { }


 getBooks(): Observable<BookDetail[]> {
   return this.http.get<BookDetail[]>(this.apiUrl).pipe(
    catchError(err => throwError(()=> new Error('Error en el servicio')))
   );
 }


 getBook(id: string): Observable<BookDetail> {
   return this.http.get<BookDetail>(this.apiUrl + "/" + id);
 }


}
