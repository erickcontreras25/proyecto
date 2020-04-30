import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearTorneoPage } from './crear-torneo.page';

describe('CrearTorneoPage', () => {
  let component: CrearTorneoPage;
  let fixture: ComponentFixture<CrearTorneoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTorneoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearTorneoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
