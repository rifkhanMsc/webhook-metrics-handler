import { config } from 'aws-sdk';

const configureAWS = () => {
  config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION || 'us-east-1',// Default to us-east-1 if not provided
  });
};

export default { configureAWS };