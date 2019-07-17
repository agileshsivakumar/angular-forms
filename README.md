# AngularForms

This project was generated with Angular CLI version `8.1.0`.
Make sure you have Angular CLI installed globally

## Development
Once cloned or downloaded, run the following command

1. To install dependencies
```script
npm install
```

2. To run the project
```script
npm start
```

3. To view the project open `http://localhost:4200/` in your browser (preferable Chrome)

## Demo Features

1. **@angular/core** features like
```
@NgModule
@Component
@Directive
@Injectable
OnInit
OnDestroy
ElementRef
Renderer2
```
2. **@angular/common** features like
```
ngIf
ngFor
{{}}
[(ngModel)]
[ngClass]
```
3. **@angular/router** features like
```
RouterModule
CanActivate
ActivatedRoute
ActivatedRouteSnapshot
redirectTo
pathMatch
navigate
navigateByUrl
```
4. **@angular/forms** features like
```
FormControl
FormGroup
Validators
AbstractControl
```
5. **rxjs** features like
```
Observables
Subject
Subscription
next()
asObservable()
```
6. **Bootstrap** styling introduction to
```
container
row
col
form-group
form-control
card
<nav>
```
7. Smart and dumb components using `@Input()` and `@Output()`
8. *Performace* and *Memory Management* when using `Subscription`

Play with it in https://agileshsivakumar.github.io/angular-forms

## Functionality
1. Already configred a admin *(admin/admin)* user and readonly *(readonly/readonly)* user
2. Role based authorization is provided on create, view and deletion of users
3. Users can also register with unique username, emailId and phone number
    - Users will be able to see only their email and phone numbers
    - Users will not be able to create new users
4. Application makes uses of only angular service so the app will not store any of the user details in the local/session storage