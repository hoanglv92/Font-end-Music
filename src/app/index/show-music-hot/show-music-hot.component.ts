import {Component, Input, OnInit} from '@angular/core';
import {Song} from '../../song';

@Component({
  selector: 'app-show-music-hot',
  templateUrl: './show-music-hot.component.html',
  styleUrls: ['./show-music-hot.component.css']
})
export class ShowMusicHotComponent implements OnInit {

  constructor() { }
  @Input() songs: Song[];

  ngOnInit(): void {
  }

}
