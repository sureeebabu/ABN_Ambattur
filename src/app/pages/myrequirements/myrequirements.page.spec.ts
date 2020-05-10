import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyrequirementsPage } from './myrequirements.page';

describe('MyrequirementsPage', () => {
  let component: MyrequirementsPage;
  let fixture: ComponentFixture<MyrequirementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrequirementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyrequirementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
