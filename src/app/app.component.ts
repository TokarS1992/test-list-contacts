import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { IClient } from './interfaces/client';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit, OnDestroy {
  public searchText = null;
  public mobileQuery: MediaQueryList;
  public clients: IClient[] = [];
  public selecredClient: IClient = null;
  private _mobileQueryListener: () => void;

  constructor(
      private httpService: HttpService,
      private changeDetectorRef: ChangeDetectorRef,
      private media: MediaMatcher
  ) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
  }
  public ngOnInit(): void {
    this.httpService.getData('assets/clients.json').subscribe(data => {
        data.map((client: IClient) => {
            client.general.fullName = `${client.general.firstName} ${client.general.lastName}`;
            return client;
        });
        this.clients = data;
    });
  }
  public ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  selectedClient(data: IClient): void {
      this.selecredClient = data;
  }
}
