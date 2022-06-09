'use strict';

const S3Functions = require('@poclainiot/s3-functions');
const AWS = require('aws-sdk');

const bucketName = 'test';
const s3Object = new AWS.S3(  { "accessKeyId"     : process.env.S3_ACCESS_KEY_ID,
                                "secretAccessKey" : process.env.S3_SECRET_ACCESS_KEY,
                                "endpoint"        : process.env.S3_ENDPOINT         }       )

async function getDevicesList(s3Object, bucketName) {
  try {
    const params = {
      Bucket: bucketName,
      Delimiter: '/',
    };
    
  } catch (err) {
    
  }
}

module.exports.getDevicesList = getDevicesList;
