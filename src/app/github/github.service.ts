import { GithubRepo } from './../../_shared/_model/github-repo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubUser } from 'src/_shared/_model/github-user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  /**
   * Search a github user
   * @param githubUserLogin the github user login
   * @return An Observable of GithubUser
   */
  searchUser(githubUserLogin: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this.apiUrl}/users/${githubUserLogin}`);
  }

  /**
   * Search the github user's repositories
   * @param githubUserLogin the github user login
   * @return An Observable of GithubRepo
   */
  searchUserRepos(githubUserLogin: string): Observable<GithubRepo[]> {
    return this.http.get<GithubRepo[]>(`${this.apiUrl}/users/${githubUserLogin}/repos`);
  }

  /**
   * Search the github user's starred repositories
   * @param githubUserLogin the github user login
   * @return An Observable of GithubRepo
   */
  searchUserStarredRepos(githubUserLogin: string) {
    return this.http.get<GithubRepo[]>(`${this.apiUrl}/users/${githubUserLogin}/starred`);
  }
}
