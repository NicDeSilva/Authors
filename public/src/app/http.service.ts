import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllAuthors() {
    return this._http.get('/api/authors')
  }

  getOneAuthor(id) {
    return this._http.get(`/api/authors/${id}`)
  }

  updateAuthor(id, data) {
    return this._http.put(`/api/authors/${id}`, data)
  }

  createAuthor(data) {
    return this._http.post('/api/authors', data)
  }

  deleteAuthor(id) {
    return this._http.delete(`/api/authors/${id}`)
  }
}
