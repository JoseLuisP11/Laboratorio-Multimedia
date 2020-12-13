import { Component, OnInit } from "@angular/core";
import { VgApiService } from '@videogular/ngx-videogular/core';
import { timer} from 'rxjs';

export interface IMediaStream {
  type: 'vod' | 'dash' | 'hls';
  source: string;
  label: string;
  token?: string;
}
@Component({
  selector: 'app-reproductor-online',
  templateUrl: './reproductor-online.component.html',
  styleUrls: ['./reproductor-online.component.css']
})
export class ReproductorOnlineComponent implements OnInit {

  currentStream: IMediaStream;
  api: VgApiService;


  streams: IMediaStream[] = [
    {
      type: 'vod',
      label: 'Videogular',
      source: 'http://static.videogular.com/assets/videos/videogular.mp4'
    },
    {
      type: 'vod',
      label: 'Sintel',
      source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
    },
    {
      type: 'vod',
      label: 'Tears of Steel',
      source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
    },
    {
      type: 'vod',
      label: 'We are going on bullrun',
      source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4'
    }
  ];

  constructor() {
  }

  onPlayerReady(api: VgApiService) {
    this.api = api;
  }

  ngOnInit() {
    this.currentStream = this.streams[0];
  }


  onClickStream(stream: IMediaStream) {
    this.api.pause();
    let myTimer = timer(0, 10);

    const subscription  = myTimer.subscribe(
      () => {
        this.currentStream = stream;
        subscription.unsubscribe();
      }
    );
  }
}
