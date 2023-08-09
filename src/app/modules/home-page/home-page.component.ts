import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime } from 'rxjs';

import { GithubApiService } from 'src/app/core/services/github-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  searchField: FormControl = new FormControl('');

  constructor(private githubApiService: GithubApiService) {}

  ngOnInit(): void {
    // this.githubApiService.getUsers();
    // this.heandlerSearchEvent();
  }

  heandlerSearchEvent(): void {
    this.searchField.valueChanges.pipe(debounceTime(500)).subscribe((searchStr: string) => {
      this.githubApiService.searchUsers(searchStr);
    });
  }
}
