import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IGithubRepo } from 'src/app/core/interfaces/github-dto';
import { ERoutes } from 'src/app/core/enums/routes.enum';

import { GithubApiService } from 'src/app/core/services/github-api.service';

export class SelectedRepo {
  public name = '';
  public description = '';
  public language = '';
  public htmlUrl = '';
  public hasIssues = false;

  constructor(repo: null | IGithubRepo = null) {
    if (repo) {
      this.name = repo.name || '';
      this.description = repo.description || '';
      this.language = repo.language || '';
      this.htmlUrl = repo.html_url || '';
      this.hasIssues = repo.has_issues || false;
    }
  }
} 

@Component({
  selector: 'app-repos-page',
  templateUrl: './repos-page.component.html',
  styleUrls: ['./repos-page.component.scss']
})
export class ReposPageComponent implements OnInit{
  readonly eRoutes = ERoutes;
  selectedRepo: SelectedRepo = new SelectedRepo();
  repos: IGithubRepo[] | any = [];

  constructor(private route: ActivatedRoute, private gitHubApiService: GithubApiService) {}

  ngOnInit(): void {
    this.getReposByLogin();
  }

  getReposByLogin(): void {
    this.route.params.subscribe((param) => {
      if (param && param['login']) {
        this.gitHubApiService.getUserRepos(param['login']).subscribe((repos: IGithubRepo[]) => {
          this.repos = repos;
        })
      }
    })
  }

  selectRepo(repo: IGithubRepo): void {
    this.selectedRepo = new SelectedRepo(repo);
    console.log(this.selectRepo)
  }
}
