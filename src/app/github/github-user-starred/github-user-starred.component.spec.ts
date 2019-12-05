import { AppModule } from './../../app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserStarredComponent } from './github-user-starred.component';

describe('GithubUserStarredComponent', () => {
  let component: GithubUserStarredComponent;
  let fixture: ComponentFixture<GithubUserStarredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubUserStarredComponent ],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUserStarredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
