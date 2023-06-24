import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";

@Injectable()
export class AplistorageProvider {
 
  static key = {
    error: 'error',
    search: 'search',
    history: 'history',
  };
 
  constructor(
    private storage: Storage,
  ) {
    this.storage.create();
  }
 
  // ストレージにデータを入れる
  set(key: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.set(key, data)
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
 
  // ストレージからデータを取得する
  get(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.get(key)
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
 
  // データの削除をする このアプリでは使用しません。
  remove(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.remove(key)
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  // データを全削除する このアプリでは使用しません。
  clear(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.clear()
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}