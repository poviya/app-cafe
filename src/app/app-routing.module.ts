import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigGuard } from './guards/config.guard';
import { AuthGuard, NoAuthGuard } from './guards';
import { MainComponent } from './modules/web/pages/main/main.component';
import { NotFoundComponent } from './modules/error/not-found/not-found.component';
import { InternalServerComponent } from './modules/error/internal-server/internal-server.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { 
        path: '',
        loadChildren: () => import('./modules/web/home/home.module').then( m => m.HomeModule )
      },
      { 
        path: 'about',
        loadChildren: () => import('./modules/web/about/about.module').then( m => m.AboutModule )
      },
      { 
        path: 'products',
        loadChildren: () => import('./modules/web/products/products.module').then( m => m.ProductsModule )
      },

      { 
        path: 'product/:slug',
        loadChildren: () => import('./modules/web/product/product.module').then( m => m.ProductModule )
      },
    
      { 
        path: 'courses',
        loadChildren: () => import('./modules/web/courses/courses.module').then( m => m.CoursesModule)
      },

      { 
        path: 'blogs',
        loadChildren: () => import('./modules/web/blogs/blogs.module').then( m => m.BlogsModule)
      },

      { 
        path: 'course/:slug',
        loadChildren: () => import('./modules/web/course/course.module').then( m => m.CourseModule )
      },

      { 
        path: 'tasting',
        loadChildren: () => import('./modules/web/tasting/tasting.module').then( m => m.TastingModule )
      },

      { 
        path: 'barista',
        loadChildren: () => import('./modules/web/barista/barista.module').then( m => m.BaristaModule )
      },

      { 
        path: 'legal',
        loadChildren: () => import('./modules/web/legal/legal.module').then( m => m.LegalModule )
      },

      { 
        path: 'privacy',
        loadChildren: () => import('./modules/web/privacy/privacy.module').then( m => m.PrivacyModule )
      },

      // { 
      //   path: ':slug',
      //   loadChildren: () => import('./modules/profile/profile.module').then( m => m.ProfileModule )
      // },
     
      // { 
      //   path: 'panel',
      //   canActivate: [ AuthGuard ], //ConfigGuard
      //   loadChildren: () => import('./modules/admin/admin.module').then( m => m.AdminModule )
      // },
      /*{ 
        path: 'legal',
        loadChildren: () => import('./modules/legal/legal.module').then( m => m.LegalModule )
      },*/
      { 
        path: 'pay',
        loadChildren: () => import('./modules/pay/pay.module').then( m => m.PayModule )
      },
    ]
  },
  { path: 'error/404', component: NotFoundComponent },
  { path: 'error/500', component: InternalServerComponent },
  
  { 
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then( m => m.AuthModule )
  },
  { 
    path: 'panel',
    canActivate: [ AuthGuard ], //ConfigGuard
    loadChildren: () => import('./modules/admin/admin.module').then( m => m.AdminModule )
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    onSameUrlNavigation: 'reload'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
