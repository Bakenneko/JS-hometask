/*import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { INTEREST_CHIPS_NAMES } from '../../../app.config';

@Component({
  selector: 'epm-chips',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './epm-chips.component.html',
  styleUrls: ['./epm-chips.component.scss']
})
export class EpmChipsComponent {
  @Input() chips!: string;
  @Input() isEditable = false;
  @Input() isActive = false;

  @Output() editChipsStatus: EventEmitter<string> = new EventEmitter<string>();

}*/

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { INTEREST_CHIPS_NAMES } from '../../../app.config';

@Component({
  selector: 'epm-chips',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './epm-chips.component.html',
  styleUrls: ['./epm-chips.component.scss']
})
export class EpmChipsComponent {
  @Input() chips!: string;
  @Input() isEditable = false;
  @Input() isActive = false;

  @Output() editChipsStatus: EventEmitter<string> = new EventEmitter<string>();

  deleteChip(chipToDelete: string) {
    this.chips = this.chips.split(' ')
        .filter((chip) => chip !== chipToDelete)
        .join(' ');
    this.editChipsStatus.emit(this.chips);
  }

  updateChip(updatedChip: string) {
    this.chips = this.chips.split(' ')
        .map((chip) => (chip === updatedChip ? chip : chip))
        .join(' ');
    this.editChipsStatus.emit(this.chips);
  }
}
