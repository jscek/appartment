import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FlatStructure } from '../models/flatStructure';
import { AuthService } from './auth.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FlatsService {
  private _currentFlat: BehaviorSubject<FlatStructure> = new BehaviorSubject<FlatStructure>(
    null
  );
  public currentFlat: Observable<FlatStructure> = this._currentFlat.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) {
    authService.currentUser.subscribe((user) => {
      if (!user) {
        this._currentFlat.next(null);
      } else {
        http
          .get<FlatStructure>(`${environment.baseUrl}/flats`)
          .subscribe((flat) => {
            this._currentFlat.next(flat);
          });
      }
    });
  }

  join(flatCode: string) {
    return this.http
      .patch<FlatStructure>(`${environment.baseUrl}/flats/${flatCode}/join`, {
        code: flatCode,
      })
      .pipe(
        catchError((err) => {
          return throwError(err);
        }),
        tap((flat) => {
          this._currentFlat.next(flat);
        })
      );
  }

  create(flatName: string): Observable<FlatStructure> {
    return this.http
      .post<FlatStructure>(`${environment.baseUrl}/flats`, {
        name: flatName,
      })
      .pipe(
        tap((flat) => {
          this._currentFlat.next(flat);
        })
      );
  }
}
