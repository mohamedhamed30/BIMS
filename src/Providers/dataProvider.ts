import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Common}from"../Providers/common";

@Injectable()

export class DataProvider {

  

    constructor(private http: Http,private common:Common) {
    }


    signIn(userName,Pass,tokenID) {
        let url =this.common.DomainName+ 'mobile/TryLoginByMobile?userName=' + userName+"&userPass="+Pass+"&tokenID="+tokenID;

        return this.http.get(url);

    }
    SaveToken(tokenID,is_Android) {
        let url =this.common.DomainName+ 'mobile/SaveMobToken?tokenID='+tokenID +"&is_Android="+is_Android;
        return this.http.get(url);
    }
}