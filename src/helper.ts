import * as GeneralModels from './shared/models/general';  
import * as jwt from 'jsonwebtoken';

var env = process.env.NODE_ENV || 'development';
var config = require('./config.'+env);

export function GetJwtPayload(token:string):GeneralModels.JwtPayload{
    var result: GeneralModels.JwtPayload;

    result = jwt.verify(token, config.jwtSecret);
    return result;
}