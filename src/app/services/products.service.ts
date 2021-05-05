import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {
  }
  getProductSelected(market, nutriscore, numberToDisplay) {
    if (nutriscore === 'all'){
      return this.http.get<any>
        // eslint-disable-next-line max-len
        ('https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=stores&tag_contains_0=contains&tag_0='+ market + '&tag_2=france&sort_by=unique_scans_n&page_size='+ numberToDisplay +'&json=1');
    } else {
      return this.http.get<any>
        // eslint-disable-next-line max-len
        ('https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=stores&tag_contains_0=contains&tag_0='+ market + '&tagtype_1=nutrition_grades&tag_contains_1=contains&tag_1='+ nutriscore + '&tag_2=france&sort_by=unique_scans_n&page_size='+ numberToDisplay +'&json=1');
    }
   }
}
