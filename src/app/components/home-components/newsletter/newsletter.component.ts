import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription-service/subscription.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  public email: string = "";
  public userAgent: string = "";
  
  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
  }

  findSubscriber(event: any): void {
    this.email = event.target.value;
    this.userAgent = window.navigator.userAgent;;
  }

  postSubscriber() {
    console.log(this.email);
    console.log(this.userAgent);
    this.subscriptionService.postSubscriber(this.email, this.userAgent).subscribe();
  }

}
