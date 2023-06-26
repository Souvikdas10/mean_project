import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get_url = "http://localhost:2345/getUser";
  post_url = "http://localhost:2345/addUser";
  edit_url = "http://localhost:2345/edit";
  update_url = "http://localhost:2345/updateUser";
  delete_url = "http://localhost:2345/deleteUser";

  constructor(private http: HttpClient) { }

  getData(): Observable<User[]> {
    return this.http.get<User[]>(this.get_url
      //   {
      //   headers: new HttpHeaders({
      //     "Content-Type": "application/x-www-form-urlencoded",
      //     "Access-Control-Allow-Origin": "*",
      //   })
      // }
    )
  }

  postData(formdata: any): Observable<User[]> {
    return this.http.post<User[]>(this.post_url, formdata
      //   {
      //   headers: new HttpHeaders({
      //     "Content-Type": "application/x-www-form-urlencoded",
      //     "Access-Control-Allow-Origin": "*",
      //   })
      // }
    )
  }

  editSingledata(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.edit_url}/${id}`)
  }

  
  updatedata(id: any, formdata: any): Observable<User[]> {
    return this.http.put<User[]>(`${this.update_url}/${id}`, formdata)
  }

  deleteUser(id: any): Observable<User[]> {
    return this.http.delete<User[]>(`${this.delete_url}/${id}`)
  }

}
