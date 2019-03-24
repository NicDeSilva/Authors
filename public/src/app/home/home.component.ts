import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors:any;

  constructor(private _httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

  getAllAuthors = () => {
    let tempObservable = this._httpService.getAllAuthors();
    tempObservable.subscribe(data => this.authors = data);
  }

  deleteAuthor = (id) => {
    let tempObservable = this._httpService.deleteAuthor(id);
    tempObservable.subscribe()
    this.getAllAuthors();
  }

  clickEdit = (id) => {
    this.router.navigate(['/edit/', {id: id}]);
  }

  ngOnInit() {
    this.getAllAuthors();
  }

}
