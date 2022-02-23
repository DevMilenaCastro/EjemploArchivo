// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { environment } from './../../environments/environment';

// interface File {
//   originalname: string;
//   filename: string;
//   location: string;
// }

// @Injectable({
//     providedIn: 'root'
//   })
//   export class FilesService {
  
//     private apiUrl = `${environment.API_URL}/api/files`;
  
//     constructor(
//       private http: HttpClient
//     ) { }

//     uploadFile(file: Blob) {
//         const dto = new FormData();
//         dto.append('file', file);
//         return this.http.post<File>(`${this.apiUrl}/upload`, dto, {
//           // headers: {
//           //   'Content-type': "multipart/form-data"
//           // }
//         })
//       }
//     }