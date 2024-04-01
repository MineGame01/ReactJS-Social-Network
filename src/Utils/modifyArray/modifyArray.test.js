import React from 'react'
import {modifyArray} from "./modifyArray";

test('Chance object', () => {
    const Array = [
        {id: 1, isHappy: true},
        {id: 2, isHappy: true},
        {id: 3, isHappy: true},
        {id: 4, isHappy: true},
        {id: 5, isHappy: true},
    ]
    const id = 2
    const config = {
        array: Array,
        nameIndexObject: 'id',
        typeModify: 'isHappy',
        toModify: false,
        toCompare: id
    }
    expect(modifyArray(config)).toEqual(
        [
            {id: 1, isHappy: true},
            {id: 2, isHappy: false},
            {id: 3, isHappy: true},
            {id: 4, isHappy: true},
            {id: 5, isHappy: true},
        ]
    )
})