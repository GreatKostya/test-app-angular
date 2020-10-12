import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

import { ShuffleNumberService } from '../../core/utils/shufle-number.service';
import { CameraDto } from '../../shared/features/cameras/camera.dto';
import { CamerasDataService } from '../../shared/features/cameras/cameras-data.service';

@Component({
  selector: 'cameras',
  templateUrl: './cameras.html',
  providers: [
    CamerasDataService
  ]
})
export class CamerasComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  data: CameraDto[] = [];
  constructor(private camerasDataService: CamerasDataService) {}

  ngOnInit() {
    const source = interval(1000);
    this.sub = source.subscribe(val => this.fetch());
  }

  ngOnDestroy() {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

  fetch() {
    this.camerasDataService.get()
      .subscribe(v => {
        this.data = ShuffleNumberService.shuffle<CameraDto>(v).slice(0, 12);
      });
  }
}
