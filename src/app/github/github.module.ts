import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { GithubRoutingModule } from './github-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubComponent } from './github.component';
import { GithubUserSearchComponent } from './github-user-search/github-user-search.component';
import { GithubUserStarredComponent } from './github-user-starred/github-user-starred.component';
import { GithubUserReposComponent } from './github-user-repos/github-user-repos.component';
import { GithubUserDetailComponent } from './github-user-detail/github-user-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GithubComponent,
    GithubUserSearchComponent,
    GithubUserStarredComponent,
    GithubUserReposComponent,
    GithubUserDetailComponent],
  imports: [
    CommonModule,
    GithubRoutingModule,
    FormsModule,
    AngularMaterialModule,
    FontAwesomeModule
  ]
})
export class GithubModule { }
