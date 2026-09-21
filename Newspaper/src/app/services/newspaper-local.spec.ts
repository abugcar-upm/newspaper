import { TestBed } from '@angular/core/testing';
import { NewspaperLocal } from './newspaper-local';

describe('NewspaperLocal', () => {
  let service: NewspaperLocal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewspaperLocal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
