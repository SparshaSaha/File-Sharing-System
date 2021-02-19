const configFile = require("../../config.json");
const baseUrl = configFile.serverUrl;
export const uploadFileUrl = `${baseUrl}/uploadFile`
export const getFilesUrl = `${baseUrl}/getFilesDetails`
export const downloadFileUrl = `${baseUrl}/getFileFromPath`
export const createDirectoryUrl = `${baseUrl}/createDirectory`
export const deleteDirectoryUrl = `${baseUrl}/deleteDirectory`
