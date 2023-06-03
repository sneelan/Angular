import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/layout/header/header.component';
import { FooterComponent } from './components/pages/layout/footer/footer.component';
import { MainComponent } from './components/pages/layout/main/main.component';
import { AngularComponent } from './components/angular/angular.component';
import { LearnComponent } from './components/learn/learn.component';
import { ChildComponent } from './components/learn/parent/child/child.component';
import { ParentComponent } from './components/learn/parent/parent.component';
import { ItemOutputComponent } from './components/learn/parent/item-output/item-output.component';
import { DefineComponent } from './components/learn/define/define.component';
import { CustomersComponent } from './components/learn/customers/customers.component';
import { ProductsComponent } from './components/learn/products/products.component';
import { ViewchildComponent } from './components/learn/viewchild/viewchild.component';
import { DemoComponent } from './components/learn/viewchild/demo/demo.component';
import { ViewencapsComponent } from './components/learn/viewencaps/viewencaps.component';
import { Comp1Component } from './components/learn/viewencaps/comp1/comp1.component';
import { Comp2Component } from './components/learn/viewencaps/comp2/comp2.component';
import { NgcontentComponent } from './components/learn/ngcontent/ngcontent.component';
import { SectionComponent } from './components/learn/ngcontent/section/section.component';
import { LifecyclehookComponent } from './components/learn/lifecyclehook/lifecyclehook.component';
import { HookdemoComponent } from './components/learn/lifecyclehook/hookdemo/hookdemo.component';
import { TestChildComponent } from './components/learn/parent/test-child/test-child.component';
import { TestChild2Component } from './components/learn/parent/test-child2/test-child2.component';
import { ContentchildComponent } from './components/learn/contentchild/contentchild.component';

import {setBackgroundDirective} from './components/learn/directive/customdirective/setbackground.directive';
import {highLightDirective} from './components/learn/directive/customdirective/highlight.directive';
import { HoverDirective } from './components/learn/directive/customdirective/hover.directive';
import { HbindingDirective } from './components/learn/directive/customdirective/hbinding.directive';
import { ClassDirective } from './components/learn/directive/customdirective/class.directive';
import { MycondDirective } from './components/learn/directive/customdirective/mycond.directive';
import { StyleDirective } from './components/learn/directive/customdirective/style.directive';
import { BootstrapComponent } from './components/learn/bootstrap/bootstrap.component';
import { DirectiveComponent } from './components/learn/directive/directive.component';
import { IfDirective } from './components/learn/directive/customdirective/if.directive';
import { ServiceComponent } from './components/learn/service/service.component';
import { Child1Component } from './components/learn/service/child1/child1.component';
import { Child2Component } from './components/learn/service/child2/child2.component';
import { LearnapiComponent } from './components/learn/learnapi/learnapi.component';
import { PagesComponent } from './components/pages/pages.component';
import { JsonimportComponent } from './components/learn/learnapi/jsonimport/jsonimport.component';
import { UserpushComponent } from './components/learn/service/userpush/userpush.component';
import { MultipleComponent } from './components/learn/service/multiple/multiple.component';
import { UserdataComponent } from './components/learn/service/userdata/userdata.component';
import { ModelComponent } from './components/learn/model/model.component';
import { NewsComponent } from './components/learn/news/news.component';
import { LayoutComponent } from './components/pages/layout/layout.component';
import { DropdownDirective } from './components/learn/directive/customdirective/dropdown.directive';
import { LoginComponent } from './components/pages/login/login.component';
import { AnimationsComponent } from './components/pages/animations/animations.component';
import { KennedyComponent } from './components/pages/kennedy/kennedy.component';
import { KotlinComponent } from './components/pages/animations/kotlin/kotlin.component';
import { RouterComponent } from './components/pages/router/router.component';
import { HomeComponent } from './components/pages/router/home/home.component';
import { Product1Component } from './components/pages/router/product1/product1.component';
import { UsersComponent } from './components/pages/router/users/users.component';
import { NewheaderComponent } from './components/pages/router/newheader/newheader.component';
import { TemplateoutletComponent } from './components/learn/templateoutlet/templateoutlet.component';
import { TchildComponent } from './components/learn/templateoutlet/tchild/tchild.component';
import { ReuseComponent } from './components/learn/reuse/reuse.component';
import { TableComponent } from './components/shared/table/table.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { ToastrComponent } from './components/learn/toastr/toastr.component';
import { SubscribeComponent } from './components/learn/service/subscribe/subscribe.component';
import { SiblingComponent } from './components/learn/service/sibling/sibling.component';
import { Child1Componenta } from './components/learn/service/sibling/child1/child1.component';
import { Child2Componenta } from './components/learn/service/sibling/child2/child2.component';
import { EventshareComponent } from './components/learn/service/sibling/eventshare/eventshare.component';
import { Sibling1Component } from './components/learn/service/sibling/eventshare/sibling1/sibling1.component';
import { Sibling2Component } from './components/learn/service/sibling/eventshare/sibling2/sibling2.component';
import { SimpleshareComponent } from './components/learn/service/sibling/simpleshare/simpleshare.component';
import { Daugher1Component } from './components/learn/service/sibling/simpleshare/daugher1/daugher1.component';
import { Daugher2Component } from './components/learn/service/sibling/simpleshare/daugher2/daugher2.component';
import { Learn2Component } from './components/learn2/learn2.component';
import { ReferenceComponent } from './components/learn/service/sibling/reference/reference.component';
import { Refer1Component } from './components/learn/service/sibling/reference/refer1/refer1.component';
import { Refer2Component } from './components/learn/service/sibling/reference/refer2/refer2.component';
import { ToastrserviceComponent } from './components/learn/toastrservice/toastrservice.component';
import { ChildtoastrComponent } from './components/learn/toastrservice/childtoastr/childtoastr.component';
import { LocalreferenceComponent } from './components/learn/service/localreference/localreference.component';
import { FormComponent } from './components/pages/form/form.component';
import { Form1Component } from './components/pages/form1/form1.component';
import { BasicsyntaxComponent } from './components/pages/basicsyntax/basicsyntax.component';
import { LoginapiComponent } from './components/learn/learnapi/loginapi/loginapi.component';
import { JsonComponent } from './components/pages/json/json.component';
import { AddemployeeComponent } from './components/pages/json/addemployee/addemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AngularComponent,
    LearnComponent,
    ChildComponent,
    ParentComponent,
    ItemOutputComponent,
    DefineComponent,
    CustomersComponent,
    ProductsComponent,
    ViewchildComponent,
    DemoComponent,
    ViewencapsComponent,
    Comp1Component,
    Comp2Component,
    NgcontentComponent,
    SectionComponent,
    LifecyclehookComponent,
    HookdemoComponent,
    TestChildComponent,
    TestChild2Component,
    ContentchildComponent,    
    setBackgroundDirective,
    highLightDirective,
    HoverDirective,
    HbindingDirective,
    ClassDirective,
    MycondDirective,
    StyleDirective,
    BootstrapComponent,
    DirectiveComponent,
    IfDirective,
    ServiceComponent,
    Child1Component,
    Child2Component,
    LearnapiComponent,
    PagesComponent,
    JsonimportComponent,
    UserpushComponent,
    MultipleComponent,
    UserdataComponent,
    LoginComponent,
    ModelComponent,
    NewsComponent,
    LayoutComponent,
    DropdownDirective,
    AnimationsComponent,
    KennedyComponent,
    KotlinComponent,
    RouterComponent,
    HomeComponent,    
    Product1Component, UsersComponent, NewheaderComponent, TemplateoutletComponent, TchildComponent, ReuseComponent, TableComponent, ButtonComponent, ToastrComponent, 
    SubscribeComponent, 
    SiblingComponent,Child1Componenta,Child2Componenta, 
    EventshareComponent, Sibling1Component, Sibling2Component, 
    SimpleshareComponent, Daugher1Component, Daugher2Component, Learn2Component, ReferenceComponent, Refer1Component, Refer2Component, ToastrserviceComponent, ChildtoastrComponent, LocalreferenceComponent, FormComponent, Form1Component, BasicsyntaxComponent, LoginapiComponent, JsonComponent, 
    AddemployeeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
