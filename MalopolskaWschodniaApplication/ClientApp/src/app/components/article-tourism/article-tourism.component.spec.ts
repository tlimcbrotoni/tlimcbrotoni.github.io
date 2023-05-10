import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTourismComponent } from './article-tourism.component';

describe('ArticleTourismComponent', () => {
  let component: ArticleTourismComponent;
  let fixture: ComponentFixture<ArticleTourismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTourismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleTourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
