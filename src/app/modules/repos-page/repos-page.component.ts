import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GithubApiService } from 'src/app/core/services/github-api.service';

@Component({
  selector: 'app-repos-page',
  templateUrl: './repos-page.component.html',
  styleUrls: ['./repos-page.component.scss']
})
export class ReposPageComponent implements OnInit{
  constructor(private route: ActivatedRoute, private gitHubApiService: GithubApiService) {}

  ngOnInit(): void {
    this.getReposByLogin()
  }

  getReposByLogin(): void {
    this.route.params.subscribe((param) => {
      if (param && param['login']) {
        this.gitHubApiService.getUserRepos(param['login'])
      }

    })
  }
}
