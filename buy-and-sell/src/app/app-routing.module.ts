import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { MyListingPageComponent } from './my-listing-page/my-listing-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/listing', pathMatch: 'full' },
  { path: 'listing', component: ListingPageComponent, pathMatch: 'full' },
  {
    path: 'listing/:id',
    component: ListingDetailPageComponent,
    pathMatch: 'full',
  },
  { path: 'contact/:id', component: ContactPageComponent, pathMatch: 'full' },
  {
    path: 'edit-listing/:id',
    component: EditListingPageComponent,
    pathMatch: 'full',
  },
  { path: 'my-listing', component: MyListingPageComponent, pathMatch: 'full' },
  {
    path: 'new-listing',
    component: NewListingPageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
