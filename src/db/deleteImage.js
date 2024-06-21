const { Storage } = require('@google-cloud/storage')
const path = require('path');

const pathKey = path.resolve('./"storageKey".json'); //service account key
const idProject = process.env.PROJECT_ID || 'foodwell-capstone2024';

const gcs = new Storage({
    projectId: idProject,
    keyFilename: pathKey,
})

const bucketName = 'foodwell'
const bucket = gcs.bucket(bucketName)

// Delete image in google cloud storage
async function deleteFile(fileName){
    const result = await bucket.file(fileName).delete();
    console.log(result)
    if(result){
        return true;
    }
    else{
        return false;
    }
}

module.exports = {
    deleteFile
}

