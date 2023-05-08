import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      { 
        path: 'dasboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule )
      },
      { 
        path: 'create-post',
        loadChildren: () => import('./create/created-post/created-post.module').then( m => m.CreatedPostModule )
      },
      { 
        path: 'create-course',
        loadChildren: () => import('./create/create-course/create-course.module').then( m => m.CreateCourseModule )
      },
      { 
        path: 'create-blog',
        loadChildren: () => import('./create/created-blog/created-blog.module').then( m => m.CreatedBlogModule )
      },
      { 
        path: 'your-products',
        loadChildren: () => import('./your-products/your-products.module').then( m => m.YourProductsModule )
      },
      { 
        path: 'post-categories',
        loadChildren: () => import('./post-categories/post-categories.module').then( m => m.PostCategoriesModule )
      },
      { 
        path: 'your-courses',
        loadChildren: () => import('./your-courses/your-courses.module').then( m => m.YourCoursesModule )
      },
      { 
        path: 'your-blogs',
        loadChildren: () => import('./your-blogs/your-blogs.module').then( m => m.YourBlogsModule )
      },
      { 
        path: 'payments',
        loadChildren: () => import('./payments/payments.module').then( m => m.PaymentsModule )
      },
      { 
        path: 'bookmarks',
        loadChildren: () => import('./bookmarks/bookmarks.module').then( m => m.BookmarksModule )
      },
      { 
        path: 'setting',
        loadChildren: () => import('./setting/setting.module').then( m => m.SettingModule )
      },
      { path: '**', redirectTo: 'your-products' },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
