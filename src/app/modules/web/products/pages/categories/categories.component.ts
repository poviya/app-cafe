import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostCategory } from 'src/app/interfaces';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() postCategories: PostCategory[] = [];
  @Input() category: string | null;

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  onCategory(postCategories: PostCategory) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/products'],
                            { queryParams: { category: postCategories.slug } });
  }

  onProducts() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/products']);
  }
}
