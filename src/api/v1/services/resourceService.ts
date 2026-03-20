import { allResources } from "./../../../data/sampleData";

export interface Resource {
    id: number,
    title: string,
    type: string,
    url: string,
    description: string,
    createdAt: string
}

export const getAllResources = (): {} => {
    // Return all resources, response message, number of resources
    return { message: "Resources retrieved", count: allResources.length, data: allResources };
}

export const getResourceById = (id: number): Resource | undefined => {
    // Return resource data directly
    let resource = allResources.find(x => x.id == id)
    return resource;
}

export const createResource = (resource: Resource): {} | undefined => {
    let existingResource = getResourceById(resource.id);

    if (existingResource){
        return undefined
    } else {
        allResources.push(resource); // Directly append Resource data to Resources array
        return { message: `Resource created with id number ${resource.id}`, data: resource }
    }
}

export const updateResource = (id: number, newData: Resource): {} | undefined => {
    if (getResourceById(id)){ // Check that resource exists
        deleteResource(id); // If exists, delete it
        newData.id = id;
        createResource(newData) // Create new resource with newData to replace it
        return { message: `Resource with id number ${id} has been updated` }
    } else {
        return undefined;
    }
}

export const deleteResource = (id: number): {} | undefined => {
    let index = allResources.findIndex(x => x.id === id); // Find the index for the resource by id specified

    if (index == -1){ 
        return undefined; // Return if not found
    } else { // Remove one item at index if found
        allResources.splice(index, 1)
        return { message: `Resource with id number ${id} has been deleted` };
    }
}
