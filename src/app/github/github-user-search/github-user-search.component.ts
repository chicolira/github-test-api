import { GithubService } from './../github.service';
import { Component, OnInit } from '@angular/core';
import { GithubUser } from 'src/_shared/_model/github-user';
import { Router } from '@angular/router';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-github-user-search',
  templateUrl: './github-user-search.component.html',
  styleUrls: ['./github-user-search.component.scss']
})
export class GithubUserSearchComponent implements OnInit {

  nameSearchInput = '';
  githubUser: GithubUser;
  isWaitingRequest = false;
  searchTimeout: any;
  noResults = false;
  faUserFriends = faUserFriends;
  faMapMarkerAlt = faMapMarkerAlt;

  constructor(
    private githubService: GithubService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  changeSearchTimeout() {

    this.noResults = false;

    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = setTimeout(() => {
      this.searchUser();
    }, 500);
  }

  searchUser() {
    this.isWaitingRequest = true;
    this.githubService.searchUser(this.nameSearchInput).subscribe(
      (res) => {
        this.githubUser = res;
        this.isWaitingRequest = false;
        this.noResults = false;
      },
      (err) => {
        this.githubUser = null;
        this.isWaitingRequest = false;
        this.noResults = true;
      }
    );
  }

  goToDetail() {
    this.router.navigate([`/user/${this.githubUser.login}`]);
  }
}
