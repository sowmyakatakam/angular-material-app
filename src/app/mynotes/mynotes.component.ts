import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-mynotes',
  templateUrl: './mynotes.component.html',
  styleUrls: ['./mynotes.component.css']
})
export class MynotesComponent implements OnInit {
  arrGrocery : string[];

  constructor(private router: Router, private httpService: HttpClient) { }

  ngOnInit () {
    this.httpService.get('./assets/grocery.json').subscribe(
      data => {
        this.arrGrocery = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.arrGrocery[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  navigateToNotes(){
    this.router.navigateByUrl('/mynotes');
  }
  editItem(){
    
  }

}
