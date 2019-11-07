//THIS FILE WILL BUILD OUT THE STORY COMPONENT

import React, {useState, useEffect} from 'react';
import {getSingleStory} from '../services/hnApi';
import {StoryWrapper} from '../styles/StoryStyles.js'

export const Story = ({id}) => {
    //create a state object called story
    const [story, setStory] = useState({});

    //when this component mounts...
    useEffect( () => {
        //pass the id prop to get the story data...
        getSingleStory(id)
            //if the story data contains the URL, update the state of the story object
            .then(data => data && data.url && setStory(data));
    },[])

    //if the story contains a URL, display the story data
    return story && story.url ? (
        <React.Fragment>
            <StoryWrapper>
                <a href={story.url}><h3>{story.title}</h3></a>
                <h4>By: {story.by}</h4>
                <p>Posted: {story.time}</p>
            </StoryWrapper>
        </React.Fragment>
    )
    : null
}
