import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuardGuard } from './auth-guard.guard';

xdescribe('AuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardGuard]
    });
  });

  it('should ...', inject([AuthGuardGuard], (guard: AuthGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
