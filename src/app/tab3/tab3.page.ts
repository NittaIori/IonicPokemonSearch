import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiProvider } from '../providers/api';
import { AplistorageProvider } from '../providers/aplistorage';

import * as constant from 'src/app/constant';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  pokemon_name: any = constant.pokemon_name;
  pokemon: any;

  constructor(
    private api: ApiProvider,
    private aplistorage: AplistorageProvider,
    private activatedRoute: ActivatedRoute,
  ) {
    // Search画面からのデータの取得
    this.activatedRoute.params
      .subscribe((param: any) => {

        const name = param['name'];
        // apiからポケモンの詳細を取得
        this.api.get(constant.urls.api_base + 'pokemon/' + name)
          .then(data => {

            this.pokemon = data.data;
            // ストレージに検索履歴の追加
            this.aplistorage.get(AplistorageProvider.key.history)
              .then(data => {
                const history: any = data || [];
                history.push(this.pokemon);
                this.aplistorage.set(AplistorageProvider.key.history, history);
              })
              .catch(error => {
                console.error(error);
              });
          })
          .catch(error => {
            console.error(error);
          });
      });
  }

  // タイプの表示を英語から日本語に変換
  createTypeHtml(types: any[]): string {
    return types.map(type => type.type.name).join(' : ');
  }
}