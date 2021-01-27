import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutEnseignantPage } from './ajout-enseignant.page';

describe('AjoutEnseignantPage', () => {
  let component: AjoutEnseignantPage;
  let fixture: ComponentFixture<AjoutEnseignantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutEnseignantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutEnseignantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
