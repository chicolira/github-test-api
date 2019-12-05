import { GithubService } from './../github.service';
import { Component, OnInit, Input } from '@angular/core';
import { GithubRepo } from 'src/_shared/_model/github-repo';

@Component({
  selector: 'app-github-user-repos',
  templateUrl: './github-user-repos.component.html',
  styleUrls: ['./github-user-repos.component.scss']
})
export class GithubUserReposComponent implements OnInit {

  repositoryList: GithubRepo[] = [];
  @Input() githubUserLogin: string;
  isWaitingRequest = false;


  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.searchUserRepos();
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  private searchUserRepos() {
    this.isWaitingRequest = true;
    this.githubService.searchUserRepos(this.githubUserLogin)
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
