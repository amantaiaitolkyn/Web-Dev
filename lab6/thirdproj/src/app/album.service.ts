import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album, AlbumPhoto} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com'
  constructor(private client: HttpClient) {}

  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }
  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}/`)
  }

  addAlbum(album:Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}/albums`,album)
  }

  getAlbumPhoto(id: number): Observable<AlbumPhoto[]>{
    return this.client.get<AlbumPhoto[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album>{
    return this.client.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }


}
