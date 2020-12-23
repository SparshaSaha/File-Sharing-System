import multer = require("multer");

export type IMulterFile = Express.Multer.File;
export type IMulterDestinationCallback = (error: Error, destination: string) => void;
export type IMulterFileNameCallback = (error: Error, filename: string) => void;
export type IMulter = multer.Multer;