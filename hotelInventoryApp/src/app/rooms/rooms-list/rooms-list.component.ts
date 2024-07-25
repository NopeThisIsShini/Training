import { ChangeDetectionStrategy, Component, EventEmitter, Input, input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges{

  //below line just do, make this rooms property as an valid html property of app-rooms-list
  @Input() rooms: RoomList[]=[]
  @Input() title: string='';

  //pass data to parent component
  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnInit(): void {
    
  }
  //ngOnChanges
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    //if value change what will happen
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
    
  }
  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }
}
