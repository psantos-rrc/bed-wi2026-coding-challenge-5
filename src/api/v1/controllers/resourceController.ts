import { Request, Response } from "express";
import * as resourceService from "../services/resourceService";
import { HTTP_STATUS } from "./../../../constants/httpConstants";

export const getHealth = (req: Request, res: Response): void => {
    res.status(HTTP_STATUS.OK).json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
};

export const getAllResources = (req: Request, res: Response): void => {
    let result = resourceService.getAllResources();
    res.status(HTTP_STATUS.OK).json(result);
};

export const getResourceById = (req: Request, res: Response): void => {
    let id = Number(req.params.id)
    
    if (!Number.isNaN(id)) {
        let result = resourceService.getResourceById(id)
        if (result){
            res.status(HTTP_STATUS.OK).json(result);
        } else {
            res.status(HTTP_STATUS.NOT_FOUND).json({message: "Resource not found"})
        }
    } else {
        res.status(HTTP_STATUS.BAD_REQUEST).json({message: "Invalid id specified"})
    }
};

export const createResource = (req: Request, res: Response): void => {

    // Validate resource data
    if (req.body.title == undefined){ // Missing title field
        res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Missing required field: title" });
    } else if (req.body.description == undefined){ // Missing description
        res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Missing required field: description" });
    } else {
        let result = resourceService.createResource(req.body)
        if (result){
            res.status(HTTP_STATUS.OK).json(result);
        } else {
            res.status(HTTP_STATUS.BAD_REQUEST).json({message: `resource with id ${req.body.id} already exists`});
        }
    }
};

export const updateResource = (req: Request, res: Response): void => {
    let id = Number(req.params.id);

    if (!Number.isNaN(id)){
        let result = resourceService.updateResource(id, req.body)
        if (result){
            res.status(HTTP_STATUS.OK).json(result);
        } else {
            res.status(HTTP_STATUS.NOT_FOUND).json({message: "Resource not found"})
        }
    } else {
        res.status(HTTP_STATUS.BAD_REQUEST).json({message: "Invalid id specified"})
    }
};

export const deleteResource = (req: Request, res: Response): void => {
    let id = Number(req.params.id)

    if (!Number.isNaN(id)){
        let result = resourceService.deleteResource(id)
        if (result){
            res.status(HTTP_STATUS.OK).json(result);
        } else {
            res.status(HTTP_STATUS.NOT_FOUND).json({message: "Resource not found"})
        }
    } else {
        res.status(HTTP_STATUS.BAD_REQUEST).json({message: "Invalid id specified"})
    }
};