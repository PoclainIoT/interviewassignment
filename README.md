# Interview assignment

# Context

The IoT team at Poclain exposes an API to access its data. The data is stored in a S3 bucket organized by devices. In this assignment, you will need to create a function returning the available devices on a given bucket.

# Instructions

- Create Git repo
- Complete getDevicesList to create a working function
- Create documentation

# What you'll need

- Documentation for the library s3-functions
- API Token
- S3 Bucket structure

## Environment variables

```
S3_ACCESS_KEY_ID=SCW9JD5EQGJ1S4J4WCPS
S3_SECRET_ACCESS_KEY=bd742fd5-7565-40ac-9342-6123b5cbfb34
S3_ENDPOINT=s3.fr-par.scw.cloud
```

## s3-functions library

### Summary

<dl>
<dt><a href="#listObjectsFromPrefix">listObjectsFromPrefix(s3Object, bucketName, prefix)</a> ⇒ <code>contents</code></dt>
<dd><p>Lists S3 objects using a bucket name and a prefix.</p>
</dd>
<dt><a href="#getCommonPrefixes">getCommonPrefixes(s3Object, bucketName, delimiter)</a> ⇒ <code>contents</code></dt>
<dd><p>Lists S3 objects using a bucket name and a delimiter.</p>
</dd>
<dt><a href="#listObjectsNamesFromPrefix">listObjectsNamesFromPrefix(s3Object, bucketName, prefix)</a> ⇒</dt>
<dd><p>Lists S3 objects&#39; names using a bucket name and a prefix.</p>
</dd>
<dt><a href="#readBufferFromS3">readBufferFromS3(s3Object, bucketName, fileName)</a> ⇒ <code>buffer</code></dt>
<dd><p>Get file from a bucket as a buffer</p>
</dd>
<dt><a href="#writeBufferToS3">writeBufferToS3(s3Object, bucketName, myKeY, data)</a></dt>
<dd><p>Writer buffer as S3 file</p>
</dd>
<dt><a href="#restoreObject">restoreObject(s3Object, bucketName, fileName)</a></dt>
<dd><p>Restore S3 object from GLACIER to NORMAL</p>
</dd>
<dt><a href="#checkIfFileExists">checkIfFileExists(s3Object, bucketName, fileName)</a></dt>
<dd><p>Check if a file exists in a bucket. Returns true if the file&#39;s head information is available, and false if a &quot;NotFound&quot; error is thrown.</p>
</dd>
<dt><a href="#readBufferFromS3ResolveReject">readBufferFromS3ResolveReject(ss3Object3, bucketName, fileName)</a> ⇒ <code>data</code></dt>
<dd><p>Get file from a bucket as a buffer</p>
</dd>
<dt><a href="#sendFileToS3">sendFileToS3(s3Object3, bucketName, myKeY, absoluteFilePath)</a></dt>
<dd><p>Upload a file into a bucket</p>
</dd>
</dl>

<a name="listObjectsFromPrefix"></a>

## listObjectsFromPrefix(s3Object, bucketName, prefix) ⇒ <code>contents</code>
Lists S3 objects using a bucket name and a prefix.

**Kind**: global function  
**Returns**: <code>contents</code> - - Objects list  

| Param | Description |
| --- | --- |
| s3Object | s3Object created with "s3 = new AWS.S3(S3Config)" |
| bucketName | Bucket name |
| prefix | Prefix, for instance "BCM2835-1BDB6405/2021/02/17/" or "BCM2835-1BDB6405/2021/02/17/BCM2835-1BDB6405_2021-02-17" |

<a name="getCommonPrefixes"></a>

## getCommonPrefixes(s3Object, bucketName, delimiter) ⇒ <code>contents</code>
Lists S3 objects using a bucket name and a delimiter.

**Kind**: global function  
**Returns**: <code>contents</code> - - Objects list  

| Param | Description |
| --- | --- |
| s3Object | s3Object created with "s3 = new AWS.S3(S3Config)" |
| bucketName | Bucket name |
| delimiter | Delimiter, for instance "/" |

<a name="listObjectsNamesFromPrefix"></a>

## listObjectsNamesFromPrefix(s3Object, bucketName, prefix) ⇒
Lists S3 objects' names using a bucket name and a prefix.

**Kind**: global function  
**Returns**: keys - Objects' names list  

| Param | Description |
| --- | --- |
| s3Object | s3Object created with "s3 = new AWS.S3(S3Config)" |
| bucketName | Bucket name |
| prefix | Prefix, for instance "BCM2835-1BDB6405/2021/02/17/" or "BCM2835-1BDB6405/2021/02/17/BCM2835-1BDB6405_2021-02-17" |

<a name="readBufferFromS3"></a>

## readBufferFromS3(s3Object, bucketName, fileName) ⇒ <code>buffer</code>
Get file from a bucket as a buffer

**Kind**: global function  
**Returns**: <code>buffer</code> - - File as buffer  

| Param | Description |
| --- | --- |
| s3Object | s3Object created with "s3 = new AWS.S3(S3Config)" |
| bucketName | Bucket name |
| fileName | Full file path, such as "BCM2835-47528878/2020/06/16/BCM2835-47528878_2020-06-16T08-38-00.000Z.zip" |

<a name="writeBufferToS3"></a>

## writeBufferToS3(s3Object, bucketName, myKeY, data)
Writer buffer as S3 file

**Kind**: global function  


| Param | Description |
| --- | --- |
| s3Object | s3Object created with "s3 = new AWS.S3(S3Config)" |
| bucketName | Bucket name |
| myKeY | Full file path, such as "BCM2835-47528878/2020/06/16/BCM2835-47528878_2020-06-16T08-38-00.000Z.zip" |
| data | Contents as buffer |

<a name="restoreObject"></a>

## restoreObject(s3Object, bucketName, fileName)
Restore S3 object from GLACIER to NORMAL

**Kind**: global function  


| Param | Description |
| --- | --- |
| s3Object | s3Object created with "s3 = new AWS.S3(S3Config)" |
| bucketName | Bucket name |
| fileName | Full file path, such as "BCM2835-47528878/2020/06/16/BCM2835-47528878_2020-06-16T08-38-00.000Z.zip" |

<a name="checkIfFileExists"></a>

## checkIfFileExists(s3Object, bucketName, fileName)
Check if a file exists in a bucket. Returns true if the file's head information is available, and false if a "NotFound" error is thrown.

**Kind**: global function  

| Param | Description |
| --- | --- |
| s3Object | s3Object created with "s3 = new AWS.S3(S3Config)" |
| bucketName | Bucket name |
| fileName | Full file path, such as "BCM2835-47528878/2020/06/16/BCM2835-47528878_2020-06-16T08-38-00.000Z.zip" |

<a name="readBufferFromS3ResolveReject"></a>

## readBufferFromS3ResolveReject(ss3Object3, bucketName, fileName) ⇒ <code>data</code>
Get file from a bucket as a buffer

**Kind**: global function  
**Returns**: <code>data</code> - - File as buffer  


| Param | Description |
| --- | --- |
| ss3Object3 | s3Object created with "s3 = new AWS.S3(S3Config)" |
| bucketName | Bucket name |
| fileName | Full file path, such as "BCM2835-47528878/2020/06/16/BCM2835-47528878_2020-06-16T08-38-00.000Z.zip" |

<a name="sendFileToS3"></a>

## sendFileToS3(s3Object3, bucketName, myKeY, absoluteFilePath)
Upload a file into a bucket

**Kind**: global function  

| Param | Description |
| --- | --- |
| s3Object3 | s3Object |
| bucketName | Bucket name |
| myKeY | S3 key, such as "BCM2835-47528878/2020/06/16/BCM2835-47528878_2020-06-16T08-38-00.000Z.zip" |
| absoluteFilePath | path to the file to upload |
