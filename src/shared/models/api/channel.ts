import {ApiRequest, ApiResponse} from "./general";

//Create Channel
export class CreateChannelRequestPayload{
    channelName:string;
    configPath:string;
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

//Join Channel
export class JoinChannelRequestPayload{
    channelName:string;
    peers:string[];//["localhost:7051","localhost:7056"]
}
export class JoinChannelResponsePayload{
    
}

export class JoinChannelRequest extends ApiRequest{
    constructor(){
        super();
        this.payload = new JoinChannelRequestPayload();
    }
    payload: JoinChannelRequestPayload;
}

export class JoinChannelReponse extends ApiResponse{
    constructor(){
        super();
        this.payload = new JoinChannelResponsePayload();
    }
    payload: JoinChannelResponsePayload;
}
