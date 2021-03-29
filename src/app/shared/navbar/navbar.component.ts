import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  inputText: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  buscar(){
    const validId = this.inputText.trim();
    if(validId.length === 0){ return; }
    this.inputText = '';
    this.router.navigate(["/usuario", validId]);
  }

}
