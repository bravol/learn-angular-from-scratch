import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    // creating a testing environment. Test bed is the major testing api in angular
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get users', () => {
    service.getUsers().subscribe((users) => {
      expect(users.length).toBeGreaterThan(0);
    });
  });
});
