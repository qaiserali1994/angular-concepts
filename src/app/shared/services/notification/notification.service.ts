import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  showNotification(errorStatusCode: string, errorMessage: string): void {
    // log message
    console.log(errorStatusCode+' '+errorMessage);
  }

}
