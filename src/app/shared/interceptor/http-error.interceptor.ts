import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, EMPTY, retry } from 'rxjs';
import { NotificationService } from '../services/notification/notification.service';
import { inject } from '@angular/core';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const notification = inject(NotificationService);

  return next(req).pipe(
    retry(1),
    catchError((err) => {
      notification.showNotification(err.status, err.statusText);
      return EMPTY;
    })
  );
};
