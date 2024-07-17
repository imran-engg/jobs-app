import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { detail } from '../detailed.model';
import { JobService } from '../alljobs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-description.component.html',
  styleUrl: './job-description.component.css'
})

export class JobDescriptionComponent implements OnInit {

  jobDetail!: detail;
  id: string = "";
  constructor(private route: ActivatedRoute, private jobService: JobService, private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getDetailedJobs(this.id);
    });
  }

  getDetailedJobs(id: string) {
    this.jobService.getDataDetail(id).subscribe((data: detail) => {
      this.jobDetail = data;
    })
  }

  toJobsList() {
    this.router.navigate(['/alljobs']);
  }

}
