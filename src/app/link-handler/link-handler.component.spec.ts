import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkHandlerComponent } from './link-handler.component';

describe('LinkHandlerComponent', () => {
  let component: LinkHandlerComponent;
  let fixture: ComponentFixture<LinkHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
