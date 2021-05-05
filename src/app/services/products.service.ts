import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {
  }
  getProductSelected(market,product) {
    return this.http.get<any>
    ('https://fr.openfoodfacts.org/brand/'+market+'/'+product+'.json');
  }
}
