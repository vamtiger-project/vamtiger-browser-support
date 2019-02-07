import { IVamtigerContactParams } from './types';
import { vc } from './config';

const { AWS, _VamtigerContact_: gvc } = window;
const { config, SNS, CognitoIdentityCredentials: Credentials } = AWS;
const { origin, href } = location;
const { stringify } = JSON;
const { x, y, z} = gvc(vc) as any;
const Subject = `Vamtiger contact: ${href}`;
const region = y;
const credentials = new Credentials({
    IdentityPoolId: x
});

Object.assign(config, { region, credentials });

const sns = new SNS();

window.VamtigerContact = ({ subject, template }: IVamtigerContactParams) => new Promise((resolve, reject) => {
    const Message = stringify({
        subject,
        template,
        origin: href
    });
    const params = {
        Message,
        Subject,
        TopicArn: z
    };

    sns.publish(params, (error, response) => error ? reject(error) : resolve(response));
});