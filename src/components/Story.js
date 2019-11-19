//THIS FILE WILL BUILD OUT THE STORY COMPONENT

import React, {useState, useEffect} from 'react';
import {getSingleStory} from '../services/hnApi';
import {StoryWrapper, StoryTitle, StoryMeta, Bolded} from '../styles/StoryStyles.js'

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
                <StoryTitle href={story.url}><h3>{story.title}</h3></StoryTitle>
                <StoryMeta>
                    <span><Bolded>By:</Bolded> {story.by} </span>
                    <span><Bolded> Posted:</Bolded> {story.time}</span>
                </StoryMeta>
            </StoryWrapper>
        </React.Fragment>
    )
    : null
}
