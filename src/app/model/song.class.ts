export class Song {

  idSong: number;
  nameSong: string;
  infoSong: string;
  imageSong: string;
  fileSong: string;
  dateSong: string;


  constructor(nameSong: string, infoSong: string, imageSong: string, fileSong: string, dateSong: string) {
    this.nameSong = nameSong;
    this.infoSong = infoSong;
    this.imageSong = imageSong;
    this.fileSong = fileSong;
    this.dateSong = dateSong;
  }
}
