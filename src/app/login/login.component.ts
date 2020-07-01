import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;

  constructor(private router: Router, private _snackBar: MatSnackBar,private _dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openSnackBar(message: string, action: string){
    this._snackBar.open(message,action,{
      duration: 1500,
    });
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigateByUrl('/mynotes');
      this.openSnackBar("Logged in Successfully","OK");
    }
    else {
      alert("Invalid credentials");
    }
    }


}
