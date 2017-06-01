import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.css']
})
export class ProxyComponent implements OnInit {

  private userId: string;

  constructor(private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = (params['id']);
      sessionStorage.setItem('id',this.userId);
      console.log('yay');
      window.location.replace('/dashboard');
    });
  }

}
