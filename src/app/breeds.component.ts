import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breeds',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {
  breeds: string[] = [];
  imageUrl: string = "";

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.dogService.getAllBreeds().subscribe(data => {
      this.breeds = Object.keys(data.message);
    });
  }

  getRandomImage(breed: string): void {
    this.dogService.getRandomImage(breed).subscribe(data => {
      this.imageUrl = data.message;
    });
  }

}