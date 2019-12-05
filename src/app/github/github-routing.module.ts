import { GithubUserStarredComponent } from './github-user-starred/github-user-starred.component';
import { GithubUserReposComponent } from './github-user-repos/github-user-repos.component';
import { NgModule } from '@angular/core';
import { GithubUserDetailComponent } from './github-user-detail/github-user-detail.component';
import { GithubUserSearchComponent } from './github-user-search/github-user-search.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: GithubUserSearchComponent },
  { path: 'user/:userlogin', component: GithubUserDetailComponent },
  { path: 'user/:userlogin/:repo', component: GithubUserReposComponent },
  { path: 'user/:userlogin/starred/:repo', component: GithubUserStarredComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GithubRoutingModule {}
