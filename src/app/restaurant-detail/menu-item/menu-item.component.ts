import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem)//Envia um objeto
  }

}
