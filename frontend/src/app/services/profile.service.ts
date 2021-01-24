import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserStructure } from '../models/userStructures';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _currentUserData: BehaviorSubject<UserStructure> = new BehaviorSubject<UserStructure>(
    null
  );
  public currentUserData: Observable<UserStructure> = this._currentUserData.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) {
    authService.currentUser.subscribe((user) => {
      if (!user) {
        return
      }
      this.get(user.id);
    });
  }

  get(userId: number) {
    this.http
        .get<UserStructure>(`${environment.baseUrl}/users/${userId}`)
        .subscribe((user) => {
          this._currentUserData.next(user);
      });
  }

  updateName(userId: number, nameValue: string) {
    return this.http
      .patch<UserStructure>(`${environment.baseUrl}/users/${userId}/update`, {
        name: nameValue
      }).subscribe(
        (user) => this.get(userId)
      )
  }

  updateAvatar(userId: number, avatarValue: string) {
    return this.http
      .patch<UserStructure>(`${environment.baseUrl}/users/${userId}/update`, {
        avatar: avatarValue
      }).subscribe(
        (user) => this.get(userId)
      )
  }

}
