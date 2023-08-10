import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { debounceTime } from 'rxjs';
import { ERoutes } from 'src/app/core/enums/routes.enum';
import { IGithubUser, IGithubUsersSearch } from 'src/app/core/interfaces/github-dto';

import { GithubApiService } from 'src/app/core/services/github-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  readonly eRoutes = ERoutes;
  searchField: FormControl = new FormControl('', [Validators.required]);
  users: IGithubUser[] | any = [];


  constructor(private githubApiService: GithubApiService) {}
  

  ngOnInit(): void {
    this.getGithubUsers();
    this.heandlerSearchEvent();
  }
  
  private getGithubUsers(): void {
    this.githubApiService.getUsers().subscribe((users: IGithubUser[]) => {
      this.users = users;
    })
  }

  private heandlerSearchEvent(): void {
    this.searchField.valueChanges.pipe(debounceTime(750)).subscribe((searchStr: string) => {
      if (searchStr) {
        this.githubApiService.searchUsers(searchStr).subscribe((searchRes: IGithubUsersSearch) => {
          this.users = searchRes.items;
        });
      }
    });
  }
}
