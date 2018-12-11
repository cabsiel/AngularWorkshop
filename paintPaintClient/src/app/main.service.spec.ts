import { TestBed, inject } from '@angular/core/testing';

import { MainService } from './main.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

describe('MainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MainService]
    });
  });

  it('should be created', inject([MainService], (service: MainService) => {
    expect(service).toBeTruthy();
  }));
});
