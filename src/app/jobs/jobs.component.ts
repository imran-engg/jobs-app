import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { CommonModule, NgFor } from '@angular/common';
import { JobService } from '../alljobs.service';
import { job } from '../alljob.model';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {

  jobdetails: job[] = [];
  sesDet: job[] = []
  constructor(private router: Router, private service: JobService) { }
  localIds: number[] = [];

  ngOnInit() {
    this.getJobList();
  }

  getJobList() {
    this.service.getJobData().subscribe((data: job[]) => {
      this.jobdetails = data;
    })
  }

  descriptionRoute(id: number) {
    this.router.navigate(['/desc/' + id]);
  }

  favouriteToggle(item: job) {
    this.service.favouriteToggle(item);
  }

  jobSelectedBoolean(item: job) {
    return this.service.jobSelectedBoolean(item)
  }


}
