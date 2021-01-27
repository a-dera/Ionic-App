import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutEtudiantPage } from './ajout-etudiant.page';

describe('AjoutEtudiantPage', () => {
  let component: AjoutEtudiantPage;
  let fixture: ComponentFixture<AjoutEtudiantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutEtudiantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutEtudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
