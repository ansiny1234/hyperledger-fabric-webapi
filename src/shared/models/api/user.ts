import {ApiRequest, ApiResponse} from "./general";
import {User} from "../general";

export class EnrollUserRequestPayload{
    username:string;
    orgName:string;
}
export class EnrollUserResponsePayload{
    token:string;
}


export class EnrollUserRequest extends ApiRequest{
    constructor(){
        super();
    }
    payload: EnrollUserRequestPayload;
}

export class EnrollUserReponse extends ApiResponse{
    constructor(){
        super();
    }
    payload: EnrollUserResponsePayload;
}

