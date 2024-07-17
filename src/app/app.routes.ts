import { Routes } from '@angular/router';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { UserFavoritesComponent } from './user-favorites/user-favorites.component';


export const routes: Routes = [
    {path:'',redirectTo:'alljobs',pathMatch:'full'},
    {path:'alljobs',component:AllJobsComponent},
    {path:'favourite',component:UserFavoritesComponent},
    {path:'desc/:id',component:JobDescriptionComponent},
    {path:'**',component:AllJobsComponent}
];
