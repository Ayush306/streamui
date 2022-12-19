import { HttpClient } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class Registration{
    baseUrl:'api'
constructor(private http$:HttpClient){
    
}
public signUp(signUpData:any):Observable<any>{
    return this.http$.post<any>(`{${this.baseUrl}/signUp`,signUpData);
}

}