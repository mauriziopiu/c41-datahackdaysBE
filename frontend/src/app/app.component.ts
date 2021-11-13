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

  i = 0;

  image: WebcamImage | undefined;

  imageString: string | undefined;

  title = 'frontend-angular';

  constructor(private http: HttpClient) {
    setInterval(() => {
      if (this.imageRoulette.length === 0) return;
      if (this.i >= this.imageRoulette.length - 1) {
        this.i = 0;
        console.log('Reseting');
      }
      this.imageSource.next(this.imageRoulette[this.i]);
      this.i++;
      console.log('UPDATING', this.i, this.imageRoulette.length);
    }, 1000);
    this.imageObs.subscribe((image) => {
      console.log('GOT IMAGE');
      this.imageString = image;
    });
  }

  captureImage(event: WebcamImage) {
    console.log('got a capture');
    console.log(event);
    this.image = event;
    this.sendPicture();
  }

  triggerWebcam() {
    this._trigger.next(undefined);
  }

  sendPicture() {
    if (this.image) {
      this.http
        .post<string[]>('/api/picture', {
          image: this.image.imageAsDataUrl,
        })
        .subscribe(
          (data) => {
            if (data.length > 0) {
              this.imageRoulette = data;
              console.log(data);
            }
          },
          (error) => {
            console.error(error);
            if (this.image) this.imageRoulette.push(this.image.imageAsDataUrl);
          },
        );
    }
  }
}
