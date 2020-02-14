import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-news-api',
  templateUrl: './news-api.component.html',
  styleUrls: ['./news-api.component.scss']
})
export class NewsApiComponent implements OnInit {
  public newsData = {};
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getDetails();
  }

  public getDetails() {
    this.contactService.getNewsData().subscribe((data: any) => {
      try {
        if (data !== undefined) {
          console.log('getDetails:::', data);
          this.newsData = data.articles;
        }
      } catch (ex) {
        console.log(ex);
      }
    }, () => { });
  }

}
