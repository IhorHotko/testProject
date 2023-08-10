import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from  '@angular/common/http';

import { ProjectConfig } from '../config/project-config';
import { EApi } from '../enums/api.enum';
import { Observable } from 'rxjs';
import { IGithubRepo, IGithubUser, IGithubUsersSearch } from '../interfaces/github-dto';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private readonly apiUrl = ProjectConfig.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IGithubUser[]> {
    return this.httpClient.get<IGithubUser[]>(`${this.apiUrl}/${EApi.USERS}`);
  }

  searchUsers(searchStr: string): Observable<IGithubUsersSearch> {
    const params = new HttpParams().set('q', searchStr);
    return this.httpClient.get<IGithubUsersSearch>(`${this.apiUrl}/${EApi.USER_SEARCH}`, {params});
  }

  getUserRepos(login: string): Observable<IGithubRepo[]> {
    return this.httpClient.get<IGithubRepo[]>(`${this.apiUrl}/${EApi.USERS}/${login}/${EApi.REPOS}`);
  }
}
