import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Album} from "../models";
import {Location} from '@angular/common';
import {ALBUMS} from "../fake-db";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  loaded: boolean;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumService: AlbumService) {
    this.album={} as Album;
    this.loaded= true;
  }
  ngOnInit(): void {
    this.getAlbum()
  }

  getAlbum(){
    this.route.paramMap.subscribe((params) => {
      const id=Number(params.get('id'));
      this.loaded=false;
      this.albumService.getAlbum(id).subscribe((album)=>{
        this.album = album;
        this.loaded = true;
      });
    });
  }

  updateAlbum() {
    this.loaded = false;
    this.albumService.updateAlbum(this.album).subscribe((album) => {
      console.log(album);
      this.loaded = true;
    });
  }
  back(){
    this.location.back();
  }

}
