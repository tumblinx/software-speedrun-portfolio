import { Component, OnInit, signal } from '@angular/core';
import { ImageService } from './services/image.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('my-portfolio');
  protected imageToShow: string | undefined;

  constructor(private imageService: ImageService){}

  ngOnInit(): void {
    this.imageService.getImage("https://dog.ceo/api/breeds/image/random").subscribe((response: any) => {
      this.imageToShow = response.message;
    });
  }
}
