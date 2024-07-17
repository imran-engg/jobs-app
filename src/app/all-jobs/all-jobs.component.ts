import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { CommonModule, NgFor } from '@angular/common';
import { JobService } from '../alljobs.service';
import { job } from '../alljob.model';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.css'
})
export class AllJobsComponent implements OnInit {

  jobdetails: job[] = [];
  sesDet: job[] = []
  constructor(private router: Router, private jobService: JobService) { }
  localIds: number[] = [];

  ngOnInit() {
    this.getJobList();
  }

  getJobList() {
    this.jobService.getJobData().subscribe((data: job[]) => {
      this.jobdetails = data;
    })
  }

  descriptionRoute(id: number) {
    this.router.navigate(['/desc/' + id]);
  }

  favouriteToggle(item: job) {
    this.jobService.favouriteToggle(item);
  }

  jobSelectedBoolean(item: job) {
    return this.jobService.jobSelectedBoolean(item)
  }


}