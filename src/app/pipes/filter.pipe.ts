import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(clients: any[], searchText: string): any {
      if (!clients) {
          return [];
      }
      if (!searchText) {
          return clients;
      }
      searchText = searchText.trim().toLocaleLowerCase();

      const filterResults = clients.filter( client => {
          for (const key in client) {
              for (const field in client[key]) {
                  let _field = client[key][field];
                  _field = _field.toLowerCase();

                  if (field === 'avatar') {
                      continue;
                  }
                  if (_field.includes(searchText)) {
                      return _field;
                  } else {
                      continue;
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
