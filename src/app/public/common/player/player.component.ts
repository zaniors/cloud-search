import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Output() playHandle: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onplay(): void {
    this.playHandle.emit();
  }
}
