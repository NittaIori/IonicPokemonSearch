import { Injectable } from "@angular/core";
import { CapacitorHttp, HttpOptions, HttpResponse } from "@capacitor/core";
import { AplistorageProvider } from "./aplistorage";

@Injectable()
export class ApiProvider {
  constructor(
    private aplistorage: AplistorageProvider,
  ) {}

  // apiからデータを取得する
  public get(url: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const optinos: HttpOptions = {
        url: url,
      };
      await CapacitorHttp.get(optinos)
        .then((data: HttpResponse) => {
          this.aplistorage.set(AplistorageProvider.key.search, {options: optinos, return: data});
          resolve(data);
        })
        .catch(error => {
          this.aplistorage.set(AplistorageProvider.key.error, error);
          console.error(error);
          reject(error);
        });
    });
  }

  // apiにデータをポストする このアプリでは使用しないです。
  public post(url: string, data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const optinos: HttpOptions = {
        url: url,
        data: data,
      };
      await CapacitorHttp.post(optinos)
        .then((data: HttpResponse) => {
          this.aplistorage.set(AplistorageProvider.key.search, {options: optinos, return: data});
          resolve(data);
        })
        .catch(error => {
          this.aplistorage.set(AplistorageProvider.key.error, error);
          console.error(error);
          reject(error);
        });
    });
  }
}