import { AppModule } from './../../app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserReposComponent } from './github-user-repos.component';

describe('GithubUserReposComponent', () => {
  let component: GithubUserReposComponent;
  let fixture: ComponentFixture<GithubUserReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubUserReposComponent ],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUserReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
