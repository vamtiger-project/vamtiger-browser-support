import { IVamtigerContactParams, VamtigerContactResolve, VamtigerContactReject } from './types';
import { vc } from './config';

const { AWS, _VamtigerContact_: gvc, VamtigerContact } = window;
const { config, SNS, CognitoIdentityCredentials: Credentials } = AWS;
const { origin, href } = location;
const { stringify } = JSON;
const { x, y, z} = gvc(vc) as any;
const Subject = `Vamtiger contact: ${href}`;
const region = y;
const credentials = new Credentials({
    IdentityPoolId: x
});
const sns = new SNS();

Object.assign(config, { region, credentials });
console.log({ region, credentials });
console.log(config);

function vamtigerContact({ subject, template }: IVamtigerContactParams, resolve: VamtigerContactResolve, reject: VamtigerContactReject) {
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
}

if (!VamtigerContact) {
    window.VamtigerContact = (params) => new Promise((resolve, reject) => vamtigerContact(params, resolve, reject));
}