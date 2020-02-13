import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) { }
// retrieving contacts
getContacts() {
    return this.http.get('http://localhost:3000/api/persons').pipe(
      map(res => res.json())
  );
}

// add contact

addContacts(newContact) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/person', newContact,{headers :headers }).pipe(map(res => res.json()));
}

// deleteMethod

deleteContact(id) {
    return this.http.delete('http://localhost:3000/api/person/' + id).pipe(map(res => res.json()));
}

// Login Validation

loginValidation(name: any, password: any ) {
  return this.http.get('http://localhost:3000/api/login?name=' + name + '&password=' + password).pipe(
    map(res => res.json())
);
}

awsCognitoValidation(loginData) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/auth/login', loginData,{headers :headers }).pipe(map(res => res.json()));
}

awsCognitoSignUp(userData) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:3000/api/auth/register', userData,{headers :headers }).pipe(map(res => res.json()));
}

}
