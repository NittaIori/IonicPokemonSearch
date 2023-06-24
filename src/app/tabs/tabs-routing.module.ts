import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home', // ここの変更
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'search', // ここの変更
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      // ここは使用しないので削除
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/home', // ここの変更
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home', // ここの変更
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
