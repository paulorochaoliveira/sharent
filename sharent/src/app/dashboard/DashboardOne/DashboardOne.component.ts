import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dashboard-one',
  templateUrl: './DashboardOne.component.html',
  styleUrls: ['./DashboardOne.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardOneComponent implements OnInit{

   bannerTitle: string = 'Find Nearby Attractions';
   bannerDesc : string = 'Expolore top-rated attractions, activities and more';
   bannerImage: string = 'assets/images/main-search-background-01.jpg';

   popularCategoriesTitle : string = 'Popular Categories';
   popularCategoriesDesc  : string = 'Browse the most desirable categories';
   categories : any = [
                        {
                           title: 'Cuisine',
                           image: 'assets/images/cat-img-1.jpg',
                        },
                        {
                           title: 'Loisir',
                           image: 'assets/images/cat-img-2.jpg',
                        },
                        {
                           title: 'Sport',
                           image: 'assets/images/cat-img-3.jpg',
                        },
                        {
                           title: 'Jardin',
                           image: 'assets/images/cat-img-4.jpg',
                        },
                        {
                           title: 'Vêtement',
                           image: 'assets/images/cat-img-5.jpg',
                        },
                        {
                           title: 'Décoration',
                           image: 'assets/images/cat-img-6.jpg',
                        }
                     ];

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {

   }
}
