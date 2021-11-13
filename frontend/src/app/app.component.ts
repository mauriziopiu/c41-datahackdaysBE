import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private _trigger = new BehaviorSubject(undefined);
  public trigger = this._trigger.asObservable();

  public imageRoulette: string[] = [];

  private imageSource = new BehaviorSubject<string | undefined>(undefined);

  private imageObs = this.imageSource.asObservable();

  image: WebcamImage | undefined;

  title = 'frontend-angular';

  constructor(private http: HttpClient) {}

  captureImage(event: WebcamImage) {
    console.log('got a capture');
    console.log(event);
    this.image = event;
  }

  triggerWebcam() {
    this._trigger.next(undefined);
  }

  sendPicture() {
    if (this.image) {
      this.http
        .post('http://localhost:3000/picture', {
          image: this.image.imageAsDataUrl,
        })
        .subscribe((data) => {
          console.log(data);
        });
      this.imageRoulette.push(this.image.imageAsDataUrl);
    }
  }
}
