import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounce, debounceTime,delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServService {
  constructor(private http:HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/users';

  sendData()
  {
    return this.http.get(this.url);
  }

  getData(id:any)
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id);
  }
}