import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaComplejosPage } from './lista-complejos.page';

describe('ListaComplejosPage', () => {
  let component: ListaComplejosPage;
  let fixture: ComponentFixture<ListaComplejosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaComplejosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaComplejosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
