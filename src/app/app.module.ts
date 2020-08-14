import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import locatePt from '@angular/common/locales/pt';
registerLocaleData(locatePt,'pt')

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';
import { ApplicationErrorHandler } from './app.error-handler';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantComponent,
    RestaurantsComponent,
    RestaurantDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
  { provide: LOCALE_ID, useValue: 'pt' },
  { provide: ErrorHandler, useClass: ApplicationErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
