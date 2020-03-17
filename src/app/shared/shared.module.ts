import { NgModule, ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "app/radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantService } from "app/restaurants/restaurants.service";
import { OrderService } from "app/order/order.server";
import { SnackbarComponent } from '../shared/messages/snackbar/snackbar.component';
import { NotificationService } from "./messages/notification.service";

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent,
        CommonModule, FormsModule, ReactiveFormsModule,SnackbarComponent]
})

export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService, RestaurantService, OrderService,NotificationService]
        }
    }



}