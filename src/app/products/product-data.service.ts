import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductDataService {

  constructor(private $http:HttpClient) { }

  getALLProducts(){
    return this.$http.get('products.json');
  }
}
