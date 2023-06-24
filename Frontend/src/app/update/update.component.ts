import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  response: any = [];
  id: any;
  data: any;
  constructor(private apiService: ApiService, private routes: Router) {}

  ngOnInit(): void {
    this.data = window.history.state;
  }

  update(body: any) {
    this.apiService.update(body).subscribe((response: any) => {
      this.response = response?.response;
      console.log('update player', this.response);
    });
  }
  Update(book_id: any, bookName: string, authorName: string, price: any) {
    const body = {
      book_id: book_id,
      title: bookName,
      author_name: authorName,
      price: price,
    };
    this.update(body);
    this.detailsPage();
  }
  detailsPage() {
    this.routes.navigate(['/home']);
  }
}
