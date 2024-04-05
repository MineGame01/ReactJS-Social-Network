//Function accept array and change object by id
export const modifyArray = ({array, nameIndexObject, typeModify, toModify = null, isAddMore = false, toCompare}) => {
    return array.map(object => {
        if (object[nameIndexObject] === toCompare) {
            return {...object, [typeModify]: isAddMore ? object[typeModify] + 1 : toModify}
        }
        return object
    })
}

//array = array
//nameIndexObject = Attribute name which id
//typeModify = What need to change?
//toModify = To what change?
//isAddMore = Need to add more?
//toCompare = To what compare?