import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AwRedditService {
  apiUrl:string = 'https://www.reddit.com/r/aww/.json';
  constructor(private http:HttpClient) { }
  getAll():any{
    return this.http.get(this.apiUrl);
}
}