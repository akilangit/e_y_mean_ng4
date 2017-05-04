instructions
============
Step 1: Add the links and set up paths in app.component.html
<ul class="nav navbar-nav">
    <li class="active"><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
</ul>

Step 2: Let's have the routes configured in app.module.ts-- Import Routes from '@angular/router'
const APP_ROUTES: Routes = [
  //syntax : path should have string and the component when that path is hit
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
]

Step 3: In @NgModule decorator, add RouterModule.forRoot(APP_ROUTES) to register the routes
imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES) // registering routes -- Import RouterModule from '@angular/router'
  ],

Step 4: Check the app. The routes should work. But the page will reload. Let's fix it.
// instead of using <a href> use <a routerLink>. Now check the app. clicking on links should not reload the page.
<ul class="nav navbar-nav">
    <li class="active"><a routerLink="/">Home</a></li>
    <li><a routerLink="/products">Products</a></li>
</ul> 

Step 5: let's have active class. have routerLinkActive in li.
<li routerLinkActive="active"><a routerLink="/">Home</a></li>
<li routerLinkActive="active"><a routerLink="/products">Products</a></li>

Step 6: Now, when you see the navigation menu, active class will be added in another link also. 
Let's fix it.
<ul class="nav navbar-nav">
    <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a routerLink="/">Home</a></li>
    <li routerLinkActive="active"><a routerLink="/products">Products</a></li>
</ul>

Step 7: In Products html page, let's add a link to 'go to home page'
<a routerLink="/">Home</a>

Step 8: Let's have a button in home page html to take us to products page
<button class="btn btn-primary" (click)="gotoProductsPage()">Go to Products Page</button>
In home.component.ts file, add dep injection in constuctor and then add a gotoProductsPage function.
constuctor(private router: Router){

}
gotoProductsPage(){
    this.router.navigate(['products']);
}
