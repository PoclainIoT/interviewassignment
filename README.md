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

## Available functions

## s3-functions library

### Summary

<dl>
<dt><a href="#listObjectsFromPrefix">listObjectsFromPrefix(bucketName, prefix)</a> ⇒ <code>contents</code></dt>
<dd><p>Lists S3 objects using a bucket name and a prefix.</p>
</dd>
<dt><a href="#listObjectsNamesFromPrefix">listObjectsNamesFromPrefix(bucketName, prefix)</a> ⇒</dt>
<dd><p>Lists S3 objects&#39; names using a bucket name and a prefix.</p>
</dd>
<dt><a href="#readBufferFromS3">readBufferFromS3(bucketName, fileName)</a> ⇒ <code>buffer</code></dt>
<dd><p>Get file from a bucket as a buffer</p>
</dd>
<dt><a href="#writeBufferToS3">writeBufferToS3(bucketName, myKeY, data)</a></dt>
<dd><p>Writer buffer as S3 file</p>
</dd>
<dt><a href="#restoreObject">restoreObject(bucketName, fileName)</a></dt>
<dd><p>Restore S3 object from GLACIER to NORMAL</p>
</dd>
<dt><a href="#checkIfFileExists">checkIfFileExists(bucketName, fileName)</a></dt>
<dd><p>Check if a file exists in a bucket. Returns true if the file&#39;s head information is available, and false if a &quot;NotFound&quot; error is thrown.</p>
</dd>
<dt><a href="#readBufferFromS3ResolveReject">readBufferFromS3ResolveReject(bucketName, fileName)</a> ⇒ <code>data</code></dt>
<dd><p>Get file from a bucket as a buffer</p>
</dd>
</dl>

<a name="listObjectsFromPrefix"></a>

## listObjectsFromPrefix(bucketName, prefix) ⇒ <code>contents</code>
Lists S3 objects using a bucket name and a prefix.

**Kind**: global function
**Returns**: <code>contents</code> - - Objects list

| Param | Description |
| --- | --- |
| bucketName | Bucket name |
| prefix | Prefix, for instance "BCM2835-1BDB6405/2021/02/17/" or "BCM2835-1BDB6405/2021/02/17/BCM2835-1BDB6405_2021-02-17" |

<a name="listObjectsNamesFromPrefix"></a>

## listObjectsNamesFromPrefix(bucketName, prefix) ⇒
Lists S3 objects' names using a bucket name and a prefix.

**Kind**: global function
**Returns**: keys - Objects' names list

| Param | Description |
| --- | --- |
| bucketName | Bucket name |
| prefix | Prefix, for instance "BCM2835-1BDB6405/2021/02/17/" or "BCM2835-1BDB6405/2021/02/17/BCM2835-1BDB6405_2021-02-17" |

<a name="readBufferFromS3"></a>

## readBufferFromS3(bucketName, fileName) ⇒ <code>buffer</code>
Get file from a bucket as a buffer

**Kind**: global function
**Returns**: <code>buffer</code> - - File as buffer

| Param | Description |
| --- | --- |
| bucketName | Bucket name |
| fileName | Full file path, such as "BCM2835-47528878/2020/06/16/BCM2835-47528878_2020-06-16T08-38-00.000Z.zip" |

<a name="writeBufferToS3"></a>

## writeBufferToS3(bucketName, myKeY, data)
Writer buffer as S3 file

**Kind**: global function
**Todo**

- [ ] Add return ?


| Param | Description |
| --- | --- |
| bucketName | Bucket name |
| myKeY | Full file path, such as "BCM2835-47528878/2020/06/16/BCM2835-47528878_2020-06-16T08-38-00.000Z.zip" |
| data | Contents as buffer |

<a name="restoreObject"></a>

## restoreObject(bucketName, fileName)
Restore S3 object from GLACIER to NORMAL

**Kind**: global function
**Todo**

- [ ] Add return ?


| Param | Description |
| --- | --- |
| bucketName | Bucket name |
| fileName | Full file path, such as "BCM2835-47528878/2020/06/16/BCM2835-47528878_2020-06-16T08-38-00.000Z.zip" |

<a name="checkIfFileExists"></a>

## checkIfFileExists(bucketName, fileName)
Check if a file exists in a bucket. Returns true if the file's head information is available, and false if a "NotFound" error is thrown.

**Kind**: global function

| Param | Description |
| --- | --- |
| bucketName | Bucket name |
| fileName | Full file path, such as "BCM2835-47528878/2020/06/16/BCM2835-47528878_2020-06-16T08-38-00.000Z.zip" |

<a name="readBufferFromS3ResolveReject"></a>

## readBufferFromS3ResolveReject(bucketName, fileName) ⇒ <code>data</code>
Get file from a bucket as a buffer

**Kind**: global function
**Returns**: <code>data</code> - - File as buffer
