import { GithubService } from './../github.service';
import { Component, OnInit, Input } from '@angular/core';
import { GithubRepo } from 'src/_shared/_model/github-repo';

@Component({
  selector: 'app-github-user-starred',
  templateUrl: './github-user-starred.component.html',
  styleUrls: ['./github-user-starred.component.scss']
})
export class GithubUserStarredComponent implements OnInit {

  repositoryList: GithubRepo[] = [];
  isWaitingRequest = false;
  @Input() githubUserLogin: string;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.searchUserStarredRepos();
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  private searchUserStarredRepos() {
    this.isWaitingRequest = true;
    this.githubService.searchUserStarredRepos(this.githubUserLogin)
      .subscribe(
        (res) => {
          this.repositoryList = res;
        },
        (err) => {
          this.repositoryList = null;
        },
        () => {
          this.isWaitingRequest = false;
        }
      );
  }
}
