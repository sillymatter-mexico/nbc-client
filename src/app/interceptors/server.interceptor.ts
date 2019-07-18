import { HttpInterceptor, HttpRequest } from '@angular/common/http/';
import { HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable()
export class ServerHttpInterceptor implements HttpInterceptor {

  private readonly urlExceptions: string[] = [
    'assets'
  ];

  private readonly server: string;

  constructor() {
    this.server = environment.apiUrl;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let usesStagingServer = true;

    for (const ex of this.urlExceptions) {
      if (req.url.match(ex)) {
        usesStagingServer = false;
        break;
      }
    }

    if (usesStagingServer) {
      const newReq = req.clone({
        url: this.server + req.url
      });

      console.log('final url', newReq.url);

      return next.handle(newReq);
    }

    return next.handle(req);
  }
}
