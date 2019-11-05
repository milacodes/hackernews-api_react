//THIS CONTAINER WILL GRAB AND RETURN STORY IDS

import React, {useEffect, useState} from 'react';
import {getStoryIds, getSingleStory} from '../services/hnApi';


export const StoriesContainer = () => {
    //first variable (storyIds) is initalized to the empty array ([passed through])
    //to change said variable, must use it's setter, setStoryIds
    const [storyIds, setStoryIds] = useState([]);


    //what is UseEffect? It's the new ComponentDidMount!
    //That empty array can hold a variable that useEffect watches
    //Any functions within useEffect get re-rendered if the array variable changes
    useEffect( () => {

        //I can put anything in the setStoryIds func (the setter),
        //and it will be the new state of storyIds.
        //its the new setState!
        // setStoryIds('Mila');

        //our getStoryIds func returns a promise (it was an async func),
        //so we MUST use .then to resolve and get access to our data
        getStoryIds()
            // .then(data => console.log("Destructured data? ", data))
            .then(idsArray => setStoryIds(idsArray))

        getSingleStory('21450654')
            .then(storyData => console.log(storyData));
    }, []);

    return (
        <h2>Yo mama, {JSON.stringify(storyIds)}</h2>
    )
}
