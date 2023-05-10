import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesTourismComponent } from './articles-tourism.component';

describe('ArticlesTourismComponent', () => {
  let component: ArticlesTourismComponent;
  let fixture: ComponentFixture<ArticlesTourismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesTourismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesTourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
