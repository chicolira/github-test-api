import { AppModule } from './../../app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserSearchComponent } from './github-user-search.component';

describe('GithubUserSearchComponent', () => {
  let component: GithubUserSearchComponent;
  let fixture: ComponentFixture<GithubUserSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubUserSearchComponent ],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
