import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComplejoPage } from './complejo.page';

describe('ComplejoPage', () => {
  let component: ComplejoPage;
  let fixture: ComponentFixture<ComplejoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplejoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComplejoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
