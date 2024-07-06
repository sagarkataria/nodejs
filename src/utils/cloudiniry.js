import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINIRY_CLOUD_NAME, 
    api_key: process.env.CLOUDINIRY_API_KEY, 
    api_secret: process.env.CLOUDINIRY_SECRET_KEY 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // upload the file on cloudinary

        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        fs.unlinkSync(localFilePath) 
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file  as the upload operation got failed
    }
}

export {uploadOnCloudinary}
