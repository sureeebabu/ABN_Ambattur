import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemberslistPage } from './memberslist.page';

describe('MemberslistPage', () => {
  let component: MemberslistPage;
  let fixture: ComponentFixture<MemberslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemberslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
