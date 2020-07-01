import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-normalhome',
  templateUrl: './normalhome.component.html',
  styleUrls: ['./normalhome.component.css']
})
export class NormalhomeComponent implements OnInit {
  //loginstate: false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToLogin(){
   // this.loginstate=true;
    this.router.navigateByUrl('/login');
    
    
  }

}
