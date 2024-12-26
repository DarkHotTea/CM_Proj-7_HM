import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHousingLocation } from './housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss',
})
export class HousingLocationComponent {
  @Input() housingLocation!: IHousingLocation;
}
