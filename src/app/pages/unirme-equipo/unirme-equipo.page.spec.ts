import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnirmeEquipoPage } from './unirme-equipo.page';

describe('UnirmeEquipoPage', () => {
  let component: UnirmeEquipoPage;
  let fixture: ComponentFixture<UnirmeEquipoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnirmeEquipoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnirmeEquipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
