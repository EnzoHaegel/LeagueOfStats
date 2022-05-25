import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  @Input() inputUsername: string | undefined;

  public username = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['user'] && params['user'] !== '' && params['user'] !== localStorage.getItem("username")) {
        this.username.setValue(params['user']);
        localStorage.setItem("username", params['user']);
        this.onSearch();
      }
    });
    if (this.username.value === '' && this.inputUsername) {
      this.username.setValue(this.inputUsername);
      localStorage.setItem("username", this.inputUsername);
      this.onSearch();
    } else if (localStorage.getItem("username")) {
      this.username.setValue(localStorage.getItem("username"));
    }
  }

  public onSearch(): void {
    localStorage.setItem("username", this.username.value);
    this.router.navigate(['/'], { queryParams: { user: this.username.value } }).then(() => {
      window.location.reload();
    });
  }
}
