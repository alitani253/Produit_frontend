import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProduitService {

  constructor(private httpClient:HttpClient) {}
    public getProduit(){
      return this.httpClient.get("http://localhost:2021/produits");
    }
}
