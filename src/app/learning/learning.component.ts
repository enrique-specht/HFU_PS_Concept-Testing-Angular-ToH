import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';
import introJs from 'intro.js';
import { steps, defaultStepOptions } from './config';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css',
})
export class LearningComponent implements OnInit, AfterViewInit {
  constructor(private readonly shepherdService: ShepherdService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  startLearning(): void {
    // introJs()
    //   .setOptions({
    //     steps: [
    //       {
    //         title: 'Welcome',
    //         intro: 'Hello World! 👋',
    //       },
    //       {
    //         element: '#Bombasto',
    //         intro: 'This step focuses on an image',
    //       },
    //       {
    //         title: 'Farewell!',
    //         element: '#hero-name',
    //         intro: 'And this is our final step!',
    //       },
    //     ],
    //   })
    //   .start();

    this.shepherdService.defaultStepOptions = defaultStepOptions;
    this.shepherdService.modal = true;

    this.shepherdService.addSteps(steps);

    this.shepherdService.start();
  }
}
