import { WebglService } from './webgl.service';
import { Component, OnInit } from '@angular/core';
import { TweenMax, TimelineMax, Ease, Power1, Bounce, Linear } from 'gsap';

@Component({
  selector:    'app-webgl',
  templateUrl: './webgl.component.html',
  styleUrls:   [],
})
export class WebglComponent implements OnInit {
  private canEleId:string = 'renderCanvas';

  constructor(private engServ: WebglService) { }

  ngOnInit() {
    this.engServ.createScene(this.canEleId);
    this.engServ.animate();

    // let tm:TimelineMax = new TimelineMax ();
  }

}
