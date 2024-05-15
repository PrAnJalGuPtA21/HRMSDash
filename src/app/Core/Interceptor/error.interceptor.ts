import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      // if ([404, 500, 400].includes(error.status)) {
      //   console.log(' Something wrong happened ');
      // }
      if (error.status === 400 || error.status === 404 || error.status === 500) {
        console.log(error.message)
        alert('Oops Something went Wrong');
      }
      return throwError(() => error);
    })
  );
};
