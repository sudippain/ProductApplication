import { TestBed } from '@angular/core/testing';

import { ProductdetailsService } from './productdetails.service';

describe('ProductdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductdetailsService = TestBed.get(ProductdetailsService);
    expect(service).toBeTruthy();
  });
});
