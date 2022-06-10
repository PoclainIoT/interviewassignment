'use strict';

const fs = require('fs');

async function listObjects(s3Object, params,  allObjects = []){
    const response = await s3Object.listObjectsV2(params).promise();
    response.Contents.forEach(obj => allObjects.push(obj));
  
    if (response.NextContinuationToken) {
      params.ContinuationToken = response.NextContinuationToken;
      await listObjects(s3Object,params, allObjects); // RECURSIVE CALL
    }
    return allObjects;
  }
  

async function listObjectsKeys(s3Object, params,  allKeys = []){
    const response = await s3Object.listObjectsV2(params).promise();
    response.Contents.forEach(obj => allKeys.push(obj.Key));
    if (response.NextContinuationToken) {
      params.ContinuationToken = response.NextContinuationToken;
      await listObjectsKeys(s3Object,params, allKeys); // RECURSIVE CALL
    }
    return allKeys;
  }

/**
 * Lists S3 objects using a bucket name and a prefix.
 * @param s3Object - s3Object created with "s3 = new AWS.S3(S3Config)"
 * @param bucketName - Bucket name
 * @param prefix - Prefix, for instance "BCM2835-1BDB6405/2021/02/17/" or "BCM2835-1BDB6405/2021/02/17/BCM2835-1BDB6405_2021-02-17"
 * @returns {contents} - Objects list
 */
exports.listObjectsFromPrefix = async function listObjectsFromPrefix(s3Object, bucketName, prefix) {
	const params = {
		Bucket: bucketName,
		Prefix: prefix
	}
	var contents = await listObjectsKeys(s3Object, params);
	return contents;												// return the content of keys
}

/**
 * Lists S3 objects using a bucket name and a delimiter.
 * @param s3Object - s3Object created with "s3 = new AWS.S3(S3Config)"
 * @param bucketName - Bucket name
 * @param delimiter - Delimiter, for instance "/"
 * @returns {contents} - Objects list
 */
 exports.getCommonPrefixes = async function getCommonPrefixes(s3Object, params,  allObjects = []){
	const response = await s3Object.listObjectsV2(params).promise();
    response.CommonPrefixes.forEach(obj => allObjects.push(obj));
  
    if (response.NextContinuationToken) {
      params.ContinuationToken = response.NextContinuationToken;
      await getCommonPrefixes(s3Object, params, allObjects); // RECURSIVE CALL
    }
    return allObjects;
  }

/**
 * Lists S3 objects' names using a bucket name and a prefix.
 * @param s3Object - s3Object created with "s3 = new AWS.S3(S3Config)"
 * @param bucketName - Bucket name
 * @param prefix - Prefix, for instance "BCM2835-1BDB6405/2021/02/17/" or "BCM2835-1BDB6405/2021/02/17/BCM2835-1BDB6405_2021-02-17"
 * @returns keys - Objects' names list
 */
exports.listObjectsNamesFromPrefix = async function listObjectsNamesFromPrefix(s3Object, bucketName, prefix) {
	const params = {
		Bucket: bucketName,
		Prefix: prefix
	}
    var keys = await listObjectsKeys(s3Object, params);
	return keys;												// return the content of keys
}


/**
 * Get file from a bucket as a buffer
 * @param s3Object - s3Object created with "s3 = new AWS.S3(S3Config)"
 * @param bucketName - Bucket name
 * @param fileName - Full file path, such as "BCM2835-47528878/2020/06/16/BCM2835-47528878_2020-06-16T08-38-00.000Z.zip"
 * @returns {buffer} - File as buffer
 */
exports.readBufferFromS3 = async function readBufferFromS3(s3Object, bucketName, fileName) {
	const params = {
		Bucket: bucketName,
		Key: fileName
	}
	var buffer = await s3Object.getObject(params).promise()
	return buffer
}

/**
 * Writer buffer as S3 file
 * @param s3Object - s3Object created with "s3 = new AWS.S3(S3Config)"
 * @param bucketName - Bucket name
 * @param myKeY - Full file path, such as "BCM2835-47528878/2020/06/16/BCM2835-47528878_2020-06-16T08-38-00.000Z.zip"
 * @param data - Contents as buffer
 * @todo Add return ?
 */
exports.writeBufferToS3 = async function writeBfferToS3(s3Object, bucketName, myKey, data) {
	const params = {	
		Bucket	: bucketName,					
		Key		: myKey,
		Body	: data
	}
	await s3Object.upload(	params, 
							function(s3Err, data) {	if (s3Err) throw s3Err	} ).promise()
}

/**
 * Restore S3 object from GLACIER to NORMAL
 * @param s3Object - s3Object created with "s3 = new AWS.S3(S3Config)"
 * @param bucketName - Bucket name
 * @param fileName - Full file path, such as "BCM2835-47528878/2020/06/16/BCM2835-47528878_2020-06-16T08-38-00.000Z.zip"
 * @todo Add return ?
 */
exports.restoreObject = async function restoreObject(s3Object, bucketName, fileName) {
	const params = {
		Bucket: bucketName,
		Key: fileName
	}
	await s3Object.restoreObject(params).promise()
}

/**
 * Check if a file exists in a bucket. Returns true if the file's head information is available, and false if a "NotFound" error is thrown.
 * @param s3Object - s3Object created with "s3 = new AWS.S3(S3Config)"
 * @param bucketName - Bucket name
 * @param fileName - Full file path, such as "BCM2835-47528878/2020/06/16/BCM2835-47528878_2020-06-16T08-38-00.000Z.zip"
 */
exports.checkIfFileExists = async function checkIfFileExists(s3Object, bucketName, fileName)
{
	const params = {
		Bucket: bucketName,
		Key: fileName
	}
	
	try { 
		const headCode = await s3Object.headObject(params).promise();
		return true;
	} 
	catch (headErr) {
		if (headErr.code === 'NotFound') {
			return false;
		} else {
			throw new Error(headErr);
		}
	}
}

/**
 * Get file from a bucket as a buffer
 * @param ss3Object3 - s3Object created with "s3 = new AWS.S3(S3Config)"
 * @param bucketName - Bucket name
 * @param fileName - Full file path, such as "BCM2835-47528878/2020/06/16/BCM2835-47528878_2020-06-16T08-38-00.000Z.zip"
 * @returns {data} - File as buffer
 * @todo Difference with readBufferFromS3 ?
 */
exports.readBufferFromS3ResolveReject = async function readBufferFromS3ResolveReject(s3Object, bucketName, fileName) {
	const params = {
		Bucket: bucketName,
		Key: fileName
	}
	return new Promise((resolve, reject) => {
		s3Object.getObject(params, (err, data) => {
			if (err) reject(err)
			else resolve(data)
		})
	})
}

/**
 * Upload a file into a bucket
 * @param s3Object3 - s3Object
 * @param bucketName - Bucket name
 * @param myKeY - S3 key, such as "BCM2835-47528878/2020/06/16/BCM2835-47528878_2020-06-16T08-38-00.000Z.zip"
 * @param absoluteFilePath - path to the file to upload
 */
 exports.sendFileToS3 = async function sendFileToS3(s3Object, bucketName, myKey, absoluteFilePath) {
	const readStream = fs.createReadStream(absoluteFilePath);

	const params = {
		Bucket: bucketName,
		Key: myKey,
		Body: readStream
	}

	await s3Object.upload(params, (err) => {
		if(err) throw new Error(err);
	}).promise();
	
	readStream.close();
}
