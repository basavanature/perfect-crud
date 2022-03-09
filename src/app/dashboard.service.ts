import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }

  getAllProducts():Observable<ResponseType> {
    return this.http.get<ResponseType>(`${environment.baseUrl}`)
  }

  createProduct(reqBody: any):Observable<ResponseType>{
    return this.http.post<ResponseType>(`${environment.baseUrl}`,reqBody)
  }

  deleteProduct(productID: any):Observable<ResponseType>{
    // let id = new HttpParams(productID)
    return this.http.delete<ResponseType>(`${environment.baseUrl}/${productID}`)
  }
  updateProduct(productID:any,reqBody:ProductType):Observable<ResponseType>{
    console.log(productID);

    return this.http.put<ResponseType>(`${environment.baseUrl}/${productID}`,reqBody)
  }
}
export interface ResponseType {
  error: boolean
  message: string
  products: Array<ProductType>
}

export interface ProductType {
  productDescription: string
  productImageURL: string
  productName: string
  productPrice: Number
  _id: string
}
