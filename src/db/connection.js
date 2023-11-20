import { config, DynamoDB } from 'aws-sdk';

// Set AWS credentials
config.update({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'us-east-1' // Replace with your desired AWS region
});

// Create DynamoDB client
const dynamoDB = new DynamoDB();