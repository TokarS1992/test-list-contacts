import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { ClientDetailComponent } from './client-detail.component';

describe('ClientDetailComponent', () => {
  let component: ClientDetailComponent;
  let fixture: ComponentFixture<ClientDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatGridListModule],
      declarations: [
          ClientDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
