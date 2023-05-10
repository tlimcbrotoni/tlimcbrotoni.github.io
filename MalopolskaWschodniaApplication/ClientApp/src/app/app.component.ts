import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './components/services/auth.service';
import { UserService } from './components/services/user.service';
import { User_1 } from './components/models/user_1.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userDetails: any;
  userId: any;
  public registerForm !: FormGroup;
  public loginForm !: FormGroup;
  title = 'Application';



  login_show() {
    document.getElementById('login')!.style.display = "block";
  }

  login_hide() {
    document.getElementById('login')!.style.display = "none";
  }

  register_show() {
    document.getElementById('register')!.style.display = "block";
  }

  register_hide() {
    document.getElementById('register')!.style.display = "none";
  }

  boolToken = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private userService: UserService) { }


  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      Username: new FormControl(''),
      Email: new FormControl(''),
      Password: new FormControl(''),
    })


    this.loginForm = this.formBuilder.group({
      Username: new FormControl(''),
      Password: new FormControl(''),
    })

    if (localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/');
      this.boolToken = true;
    }

    this.authService.getMe().subscribe((name: string) => {
      this.userId = name;
    });

  }

  register() {
    console.log(this.registerForm.value)
    this.authService.register(this.registerForm.value).subscribe({
      next: (v) => {
        window.location.reload();
      },
      error: (e) => {
        this.registerForm.reset();
      }
    });
  }

  login() {
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    )
  }

  logout() {
    localStorage.removeItem("token");
    window.location.reload();
  }



}
