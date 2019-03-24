import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  newAuthor: any;

  constructor(private _httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

  createAuthor = () => {
    let tempObservable = this._httpService.createAuthor(this.newAuthor);
    tempObservable.subscribe(data => {
      this.router.navigate(['/home']);
    });
  }

  ngOnInit() {
    this.newAuthor = { name: "" };
  }

}
