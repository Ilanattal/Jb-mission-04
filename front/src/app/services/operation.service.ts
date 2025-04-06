import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operation } from '../models/operation.model'; // ✅

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private baseUrl = 'http://localhost:3000/operations';

  constructor(private http: HttpClient) {}

  getOperations(accountNumber: string): Observable<Operation[]> {
    return this.http.get<Operation[]>(`${this.baseUrl}/${accountNumber}`);
  }

  addOperation(operation: Partial<Operation>): Observable<Operation> {
    return this.http.post<Operation>(this.baseUrl, operation);
  }
}