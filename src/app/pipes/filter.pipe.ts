import { Pipe, PipeTransform } from '@angular/core';
import { IClient } from '../interfaces/client';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(clients: IClient[], searchText: string): IClient[] | number[] {
      if (!clients) {
          return [];
      }
      if (!searchText) {
          return clients;
      }
      searchText = searchText.trim().toLocaleLowerCase();

      const filterResults = clients.filter( client => {
          for (const key in client) {
              if (client.hasOwnProperty(key)) {
                  for (const field in client[key]) {
                      if (client[key].hasOwnProperty(field)) {
                          try {
                              let _field = client[key][field];
                              _field = _field.toLowerCase();

                              if (field === 'avatar') {
                                  continue;
                              }
                              if (_field.includes(searchText)) {
                                  return _field;
                              }
                          } catch (e) {
                              console.log(e);
                          }
                      }
                  }
              }
          }
      });

      if (filterResults.length === 0) {
        return [-1];
      }

      return filterResults;
  }
}
