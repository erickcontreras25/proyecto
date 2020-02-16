import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearEquipoPage } from './crear-equipo.page';

describe('CrearEquipoPage', () => {
  let component: CrearEquipoPage;
  let fixture: ComponentFixture<CrearEquipoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEquipoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearEquipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
