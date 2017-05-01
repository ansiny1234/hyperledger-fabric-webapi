import { Router, Request, Response, NextFunction } from 'express';
import ChannelService from '../services/channel.service';

import * as GeneralModels from '../shared/models/general';
import * as ChannelApiModels from '../shared/models/api/channel';
import * as ChannelExceptionModels from '../shared/models/exceptions/channel';

import * as jwt from 'jsonwebtoken';


var config = require('../../config.json');

export class UserRouter {
    router: Router

    constructor() {
        this.router = Router();
        this.init();
    }

    public async create(req: Request, res: Response, next: NextFunction){
        var response = new ChannelApiModels.CreateChannelReponse();
        var request: ChannelApiModels.CreateChannelRequest = req.body;

        var channelService = new ChannelService();
        try{
            if(request.payload.channelName==null){
                throw new ChannelExceptionModels.InvalidCreateChannelRequest("channelName is missing");
            }
            var jwtPayload:GeneralModels.JwtPayload = jwt.verify(request.token, config.jwtSecret);
            var result = await channelService.create(request.payload.channelName,"../artifacts/channel/mychannel.tx", jwtPayload.unm, jwtPayload.onm);
            response.message = result.message;
            if(!result.success){
                res.statusCode = 500;//internal server error
            }
        }catch(err){
            if(err instanceof ChannelExceptionModels.InvalidCreateChannelRequest){
                response.message = err.message;
                res.statusCode = 400;//bad request
            }else{
                response.message = "error";
                res.statusCode = 500;//internal server error
            }
        }

        res.send(response);
    }

    init() {
        this.router.post('/create', this.create);
    }

}

// Create the HeroRouter, and export its configured Express.Router
const router = new UserRouter();
router.init();

export default router.router;