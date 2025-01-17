import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiBaseService } from './shared/services/ApiBase/api-base.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-concepts';
  private apiService = inject(ApiBaseService);

  ngOnInit(){
    this.apiService.DelayUser().subscribe(response =>{
      console.log('response', response)
    });
  }

}
