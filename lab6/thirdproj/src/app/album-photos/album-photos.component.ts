import { Component,OnInit } from '@angular/core';
import {Album, AlbumPhoto} from "../models";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  albums!: Album;
  photos!: AlbumPhoto[];
  loaded: boolean
  constructor(private route: ActivatedRoute,
              private location:Location,
              private albumService:AlbumService) {
    this.loaded= true;
  }
  ngOnInit(): void{
    this.getAlbums();
    this.getPhotos()
  }

  getAlbums(){
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((albums)=>{
        this.albums=albums;
      });
    });
  }

  getPhotos(){
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbumPhoto(id).subscribe((photos) => {
        this.photos = photos;
        this.loaded = true;
      });
    });
  }

  back(){
    this.location.back();
  }


}
