import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EtudiantsPage } from './etudiants.page';

describe('EtudiantsPage', () => {
  let component: EtudiantsPage;
  let fixture: ComponentFixture<EtudiantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EtudiantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
