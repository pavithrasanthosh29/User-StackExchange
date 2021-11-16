import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserListResponse } from "./models/user-list-response.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  BASE_URL = "https://api.stackexchange.com/2.3/";

  PATH_URL = "users?order=desc&sort=reputation&site=stackoverflow&inname=";

  userListResponse: UserListResponse;
  userListEvent = new EventEmitter<UserListResponse>();

  constructor(public httpClient: HttpClient) {}

  protected getHttpOptions() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  getStackExchangeUsers(username: string): Observable<UserListResponse> {
    return this.httpClient.get<UserListResponse>(
      this.BASE_URL + this.PATH_URL + username,
      this.getHttpOptions()
    );
  }
}
