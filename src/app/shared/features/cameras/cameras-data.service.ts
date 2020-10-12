import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { CameraDto } from './camera.dto';

@Injectable()
export class CamerasDataService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get('/assets/mocked-data/cameras.json')
      .pipe(
        map((v: CameraDto[]) => v.map(d => new CameraDto(d)))
      )
  }
}
