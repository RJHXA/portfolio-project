import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  
  currentItem: number = 0;
  lastItem: number = 0;
  items = document.querySelectorAll(".item");
  maxItems: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.items = document.querySelectorAll(".item");
    this.maxItems = this.items.length;
  }

  onClickLeft() {
    
    this.lastItem = this.currentItem;
    this.currentItem = this.currentItem - 1;

    if(this.currentItem < 0) {
      this.currentItem = this.maxItems-1;
    }

    this.updateClass()
  }

  onClickRight() {

    this.lastItem = this.currentItem;
    this.currentItem = this.currentItem + 1;

    if(this.currentItem >= this.maxItems) {
      this.currentItem = 0;
    }

    this.updateClass()
  }

  updateClass() {

    console.log(this.currentItem);
    console.log(this.lastItem);

    console.log(this.items[0]);
    let removeID = document.getElementById("currentItem");

    if(removeID != undefined) removeID.id = "";
    //this.items[this.lastItem].removeAttribute("id", "currentItem");


    this.items[this.currentItem].scrollIntoView({
      behavior: "smooth",
      inline: 'center'
    });

    this.items[this.currentItem].setAttribute("id", "currentItem");
  }

}