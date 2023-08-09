import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from  '@angular/common/http';

import { ProjectConfig } from '../config/project-config';
import { EApi } from '../enums/api.enum';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private readonly apiUrl = ProjectConfig.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getUsers(): void {
    this.httpClient.get(`${this.apiUrl}/${EApi.USERS}`).subscribe(console.log)
  }

  searchUsers(searchStr: string): void {
    const params = new HttpParams().set('q', searchStr);
    this.httpClient.get(`${this.apiUrl}/${EApi.USER_SEARCH}`, {params}).subscribe(console.log)
  }

  getUserRepos(login: string): void {
    this.httpClient.get(`${this.apiUrl}/${EApi.USERS}/${login}/${EApi.REPOS}`).subscribe(console.log)
  }
}
