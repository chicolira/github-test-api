import { GithubService } from './../github.service';
import { GithubUser } from 'src/_shared/_model/github-user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-github-user-detail',
  templateUrl: './github-user-detail.component.html',
  styleUrls: ['./github-user-detail.component.scss']
})
export class GithubUserDetailComponent implements OnInit {

  githubUserLogin = '';
  githubUser: GithubUser;
  isWaitingRequest = false;
  repoCount = 0;
  starredCount = 0;
  faUserFriends = faUserFriends;
  faMapMarkerAlt = faMapMarkerAlt;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {
    this.checkParams();
  }

  ngOnInit() {
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  private checkParams() {
    if (!this.router.getCurrentNavigation().extras.state) {
      this.searchUser();
    } else {
      this.githubUser = this.router.getCurrentNavigation().extras.state.githubUser;
    }
  }

  private searchUser() {

    this.isWaitingRequest = true;
    this.route.paramMap.subscribe(params => {

      this.githubUserLogin = params.get('userlogin');

      this.githubService.searchUser(this.githubUserLogin).subscribe(
        (res) => {
          this.githubUser = res;
        },
        (err) => {
          this.githubUser = null;
        },
        () => {
          this.isWaitingRequest = false;
        }
      );
    });
  }

}
