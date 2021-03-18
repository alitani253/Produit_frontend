import { Component, OnInit } from '@angular/core';
import { ServiceProduitService } from '../service/service-produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  public produits : any;


  constructor( private serviceProduit : ServiceProduitService) { }

  ngOnInit(): void {
  }

  onGetProducts(){
    this.serviceProduit.getProduit(). subscribe(data=>{
      this.produits=data
  }, err=>{
    console.log(err);
  }
  )
   

  }

}
