import React, {useState, useMemo, useEffect} from 'react';

export default function Head(props) {
    const headArray = useMemo(() => {
        let headArray = [];
        for (let i=0; i< 25; i++){
            const headChoices = ['/gus_head.png','/eddy_head.png'];
            const randInt = Math.floor(Math.random() * 2);
            headArray[i] = headChoices[randInt];
        }
        console.log('Head Array: ',headArray);
        console.log('props.id: ',props.id);
        return headArray;
    }, [props.id])
    

    return (<img src={headArray[props.id]} className="headImage"/>)
}