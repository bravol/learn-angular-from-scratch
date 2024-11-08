import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userserviceSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    userserviceSpy = spyOn(userService, 'getUsers').and.returnValue(
      of([
        { id: 1, name: 'John' },
        { id: 2, name: 'Brian' },
        { id: 3, name: 'Maria' },
      ])
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should retrieve users from the Userservcies on init', () => {
    fixture.detectChanges(); //start a life cyle hook
    expect(userService).toHaveBeenCalled();
  });
  it('should retrieve users from hte userservcies when the refresh button is clicked', () => {
    fixture.detectChanges();

    userserviceSpy.calls.reset();

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(userserviceSpy).toHaveBeenCalled();
  });
});
