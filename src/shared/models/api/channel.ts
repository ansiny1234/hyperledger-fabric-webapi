import {ApiRequest, ApiResponse} from "./general";

//Create Channel
export class CreateChannelRequestPayload{
    channelName:string;
}
export class CreateChannelResponsePayload{
    
}

export class CreateChannelRequest extends ApiRequest{
    constructor(){
        super();
        this.payload = new CreateChannelRequestPayload();
    }
    payload: CreateChannelRequestPayload;
}

export class CreateChannelReponse extends ApiResponse{
    constructor(){
        super();
        this.payload = new CreateChannelResponsePayload();
    }
    payload: CreateChannelResponsePayload;
}

