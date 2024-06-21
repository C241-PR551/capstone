const { Storage } = require('@google-cloud/storage')
const fs = require('fs');
const { get } = require('http');
const path = require('path');

const pathKey = path.resolve('./"storageKey".json'); //service account key
const idProject = process.env.PROJECT_ID || 'foodwell-capstone2024';

const gcs = new Storage({
    projectId: idProject,
    keyFilename: pathKey,
})

const bucketName = 'foodwell'
const bucket = gcs.bucket(bucketName)

let ImgUpload = {}

// Upload image in google cloud storage
ImgUpload.uploadToGcs = (req) =>{
    
    if (!req.file) return false;


    const date = new Date()
    const fileName = date.getTime();
    const file = bucket.file(fileName)

    const stream = file.createWriteStream({
        metadata: {
            contentType: req.file.mimetype
        }
    })

    stream.on('error', (err) => {
        req.file.cloudStorageError = err
        return false;
    })

    stream.end(req.file.buffer)
    {
        return 'https://storage.googleapis.com/foodwell/' + fileName;
    }
}

module.exports = ImgUpload