import {IError} from './general';

export class InvalidCreateChannelRequest implements IError{
    constructor(message: string){
        this.message = message;
    }
    message: string;
}