import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component'
import { ReviewsComponent } from './reviews/reviews.component'
import { OrderSummaryComponent } from './order-summary/order-summary.component'


// ROTAS
export const ROUTES: Routes = [

    { path: '' ,component:HomeComponent},//É o componente padrão
    {path:'restaurants',component:RestaurantsComponent},
    {path:'restaurants/:id',component:RestaurantDetailComponent,
        // ROTAS DE NAVEGAÇÃO FILHAS
        children:[
        {path:'',redirectTo:'menu',pathMatch:'full'},
         {path:'menu',component:MenuComponent},
         {path:'reviews',component:ReviewsComponent}
    ]},
    { path: 'order' ,loadChildren:'./order/order.module#OrderModule'},
    { path: 'order-summary' ,component:OrderSummaryComponent},
    { path: 'about' ,loadChildren:'./about/about.module#AboutModule'} 

]