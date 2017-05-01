var util = require('util');
var fs = require('fs');
var path = require('path');
var config = require('../../config.json');
var helper = require('./helper.js');
var logger = helper.getLogger('Channel');

export class ChannelService {
    constructor() {

    }

    create(channelName:string, channelConfigPath:string, username:string, orgName:string):Promise<any>{
        helper.setupOrderer();
        var chain = helper.getChainForOrg(orgName);
        return new Promise<any>(function(resolve, reject) {
            helper.getRegisteredUsers(username, orgName)
                .then((member) => {
                    logger.debug('Successfully enrolled user \''+username+'\'');
                    // readin the envelope to send to the orderer
                    var request = {
                        envelope: fs.readFileSync(path.join(__dirname, channelConfigPath))
                    };
                    // send to orderer
                    return chain.createChannel(request);
                }, (err) => {
                    logger.error('Failed to enroll user \''+username+'\'. Error: ' + err);
                    return reject(new Error('Failed to enroll user \''+username+'\'' + err));
                }).then((response) => {
                    logger.debug(' response ::%j', response);
                    if (response && response.status === 'SUCCESS') {
                        logger.debug('Successfully created the channel.');
                        let response = {
                            success: true,
                            message: 'Channel \'' + channelName + '\' created Successfully'
                        };
                    return resolve(response);
                    } else {
                        logger.error('\n!!!!!!!!! Failed to create the channel \'' + channelName +
                            '\' !!!!!!!!!\n\n');
                        return reject(new Error('Failed to create the channel \'' + channelName + '\''));
                    }
                }, (err) => {
                    logger.error('Failed to initialize the channel: ' + err.stack ? err.stack :
                        err);
                    return reject(new Error('Failed to initialize the channel: ' + err.stack ? err.stack : err));
                });
        });
    }


}

export default ChannelService;