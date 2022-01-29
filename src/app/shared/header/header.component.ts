import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

public  tiles=['Home',"Settings",'About'];
public links=['/home','/settings','/about'];

  constructor() { }

  ngOnInit(): void {
  }

}
