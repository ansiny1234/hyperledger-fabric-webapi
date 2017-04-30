import {ApiRequest, ApiResponse} from "./general";

//Create Channel
export class CreateChannelRequestPayload{
    username:string;
    orgName:string;
}
export class CreateChannelResponsePayload{
    token:string;
}

export class CreateChannelRequest extends ApiRequest{
    constructor(){
        super();
    }
    payload: CreateChannelRequestPayload;
}

export class CreateChannelReponse extends ApiResponse{
    constructor(){
        super();
    }
    payload: CreateChannelResponsePayload;
}

