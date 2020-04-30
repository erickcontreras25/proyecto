import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TorneoUserPage } from './torneo-user.page';

describe('TorneoUserPage', () => {
  let component: TorneoUserPage;
  let fixture: ComponentFixture<TorneoUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorneoUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TorneoUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
