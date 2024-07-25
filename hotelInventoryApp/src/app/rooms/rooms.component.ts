import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, DoCheck, OnInit, ViewChild, viewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})

export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {

  //viewChild use case
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  ngAfterViewInit(): void {
    
  }


  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }

  //iniatialize the roomList variable
  roomList: RoomList[] = [];

  //for toggle title is defined
  title = 'Room List';

  constructor() { }
  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner , Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 600,
        chekInTime: new Date('25-Jul-2024'),
        checkOutTime: new Date('26-Jul-2024')
      },
      {
        roomNumber: 2,
        roomType: 'Normal Room',
        amenities: 'Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 400,
        chekInTime: new Date('23-Jul-2024'),
        checkOutTime: new Date('27-Jul-2024')
      },
      {
        roomNumber: 3,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner , Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 700,
        chekInTime: new Date('22-Jul-2024'),
        checkOutTime: new Date('24-Jul-2024')
      },
      {
        roomNumber: 5,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner , Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 600,
        chekInTime: new Date('25-Jul-2024'),
        checkOutTime: new Date('26-Jul-2024')
      },
      {
        roomNumber: 7,
        roomType: 'Normal Room',
        amenities: 'Air Conditioner , Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 600,
        chekInTime: new Date('25-Jul-2024'),
        checkOutTime: new Date('26-Jul-2024')
      },
    ];
  }
  ngDoCheck(): void {
    console.log('on changes is called');
  }

  selectRoom(room: RoomList) {
    console.log(room);

  }
  //add room ()
  addRoom() {
    const room: RoomList = {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner , Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 600,
      chekInTime: new Date('25-Jul-2024'),
      checkOutTime: new Date('26-Jul-2024')
    }

    // this.roomList.push(room);
    //this below line says spread the object  (old record+ new record)
    this.roomList = [...this.roomList, room];
  }
  //toggle to check ngOnChnages
  toggle() {
    this.title = 'Rooms List';
  }



}
