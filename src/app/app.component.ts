import { Component, AfterViewInit } from '@angular/core';
import Hls from 'hls.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  streamUrl: string = 'https://22c46707142c.us-east-1.playback.live-video.net/api/video/v1/us-east-1.466068279757.channel.ZIdp2OwU4fyR.m3u8';

  ngAfterViewInit(): void {
    const video = document.getElementById('videoPlayer') as HTMLVideoElement;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(this.streamUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = this.streamUrl;
    }
  }
}
