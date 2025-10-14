import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

export interface NoteModel {

}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private readonly API_ENDPOINT =  `${environment.apiUrl}/notes`;

  constructor(private http: HttpClient) { }

  getNotes(): Observable<NoteModel[]> {
    return this.http.get<NoteModel[]>(this.API_ENDPOINT);
  }
}
