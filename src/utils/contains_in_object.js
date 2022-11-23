export function containsInObject(obj, array){
    return array.some(element => element.title === obj.title);
};