import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  edits:any;
  id: string;
  errors:any;
  
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

  getOneAuthor = () => {
    let tempObservable = this._httpService.getOneAuthor(this.id);
    tempObservable.subscribe(data => {
      this.edits.name = data['name'];
    });
  }


  updateAuthor = () => {
      console.log(this.id, this.edits);
    let tempObservable = this._httpService.updateAuthor(this.id,this.edits);
    tempObservable.subscribe(data => {
      if (data['errors']){
        this.errors = data['errors'];
        console.log(this.errors);
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => { this.id = params['id']});
    this.edits = {name: ''};
    this.getOneAuthor();
  }

}
