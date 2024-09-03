import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService, pokemon } from '../pokeapi.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  pokemon:pokemon[] = [];

  constructor(
    private pokeApi: PokeapiService
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.pokeApi.getGen1().subscribe((res: any) =>{
      this.pokemon = res["results"] 
      console.log(this.pokemon)
    });
  }
}
