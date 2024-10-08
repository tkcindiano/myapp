import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { AmazonCartComponent } from './amazon-cart/amazon-cart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule} from '@angular/common/http';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { FlipkartCartComponent } from './flipkart-cart/flipkart-cart.component';
import { EmailComponent } from './email/email.component';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { MemesComponent } from './memes/memes.component';
import { ReloadComponent } from './reload/reload.component';
import { ViewVehiclesComponent } from './view-vehicles/view-vehicles.component';
import { ViewBanksComponent } from './view-banks/view-banks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateStudentFormComponent } from './create-student-form/create-student-form.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingsComponent } from './ratings/ratings.component';
import { CartComponent } from './cart/cart.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { Cart1Component } from './cart1/cart1.component';
import { Cart2Component } from './cart2/cart2.component';
import { Cart3Component } from './cart3/cart3.component';
import { Cart4Component } from './cart4/cart4.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { AboutUsModule } from './about-us/about-us.module';
import { PaymentsModule } from './payments/payments.module';
import { TodoComponent } from './todo/todo.component';
import { Todo1Component } from './todo1/todo1.component';
import { Todo2Component } from './todo2/todo2.component';
import { Todo3Component } from './todo3/todo3.component';




@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DiceComponent,
    DirectivesPipesComponent,
    EmployeesComponent,
    AmazonCartComponent,
    VehiclesComponent,
    BankAccountsComponent,
    FlipkartCartComponent,
    EmailComponent,
    CreateVehiclesComponent,
    CreateBankAccountComponent,
    StudentComponent,
    CreateStudentComponent,
    MemesComponent,
    ReloadComponent,
    ViewVehiclesComponent,
    ViewBanksComponent,
    CreateUserComponent,
    CreateStudentFormComponent,
    ParentComponent,
    ChildComponent,
    RatingsComponent,
    CartComponent,
    Sibling1Component,
    Sibling2Component,
     Cart1Component,
    Cart2Component,
    Cart3Component,
    Cart4Component,
    TextAreaComponent,
    TodoComponent,
    Todo1Component,
    Todo2Component,
    Todo3Component, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AboutUsModule,
    PaymentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
