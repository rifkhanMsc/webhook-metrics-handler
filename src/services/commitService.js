import { DynamoDB } from 'aws-sdk';

// Create a DynamoDB Document Client
const dynamoDB = new DynamoDB.DocumentClient();

// Example service methods
const getAllCommits = async () => {
  const params = {
    TableName: 'UsersTable', 
  };

  const result = await dynamoDB.scan(params).promise();
  return result.Items;
};

const getCommitById = async (userId) => {
  const params = {
    TableName: 'UsersTable', 
    Key: {
      userId: userId,
    },
  };

  const result = await dynamoDB.get(params).promise();
  return result.Item;
};

const createCommit = async (userId, name, email) => {
  const params = {
    TableName: 'UsersTable', 
    Item: {
      userId: userId,
      name: name,
      email: email,
      
    },
  };

  await dynamoDB.put(params).promise();
  return params.Item;
};


export default {
    getAllCommits,
    getCommitById,
    createCommit,
};