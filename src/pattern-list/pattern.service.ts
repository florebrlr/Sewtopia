import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: "root"})
export class PatternService {
  constructor(private http: HttpClient) { }

  getPatterns() {
    console.log("GET patterns")
    return this.http.get("http://localhost:3000/patterns");
  }
}