import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Song} from '../../../model/song.class';
import {SongServiceService} from '../../../service/SongService/song-service.service';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit, OnDestroy {
  song: Song = null;
  songs: Song[] = [];

  nameSong: string;
  infoSong: string;
  imageSong: string;
  fileSong: string;
  dateSong: string;

  subscription: Subscription;

  constructor(public songServiceService: SongServiceService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onAddSong() {
    // @ts-ignore
    const newSong = new Song(this.nameSong, this.infoSong, this.imageSong, this.fileSong, this.dateSong);
    this.subscription = this.songServiceService.addSong(newSong)
      .subscribe(
        (newData) => {
          this.songs.push(newData);

        }, error => {
          this.songServiceService.handleError(error);
        }
      );


  }

}
