import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './sections/home/home.component';
import {SECTION} from './models/routing.model';
import {AboutComponent} from './sections/about/about.component';

const routes: Routes = [
  {
    path:       '',
    redirectTo: SECTION.home,
    pathMatch:  'full',
  },
  {
    path:      SECTION.home,
    component: HomeComponent,
  },
  {
    path:      SECTION.lazyModule,
    loadChildren: './sections/lazy-loading-module/lazy-loading.module#LazyLoadingModule',
  },
  {
    path:      SECTION.contact,
    loadChildren: './sections/contact/contact.module#ContactModule',
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    // RouterModule.forRoot(ROUTES, {
    //     useHash:            Boolean(history.pushState) === false,
    //     preloadingStrategy: PreloadAllModules
    // })
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
