import { TestBed } from '@angular/core/testing';

import { EnvioFormService } from './envio-form.service';

describe('EnvioFormService', () => {
  let service: EnvioFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
