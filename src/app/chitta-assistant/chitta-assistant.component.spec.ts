import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChittaAssistantComponent } from './chitta-assistant.component';

describe('ChittaAssistantComponent', () => {
  let component: ChittaAssistantComponent;
  let fixture: ComponentFixture<ChittaAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChittaAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChittaAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
