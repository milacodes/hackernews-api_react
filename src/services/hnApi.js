// PROVIDES THE SERVICE OF MAKING THE API CALL TO GET THE STORIES

import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

//whatever is returned from an async function ALWAYS returns a promise.
//It MUST be resolved
export const getStoryIds = async() => {
    const result = await axios.get(newStoriesUrl)
            //destructure the data that you get back ({data})
            //so when you try to use it elsewhere, you don't have to
            //dive into the object (data.data.data.etc)
            .then(({data}) => data);
    return result;
}
const selectedFields = ({id, by, title, time, url} = {}) => ({
    id,
    by,
    title,
    time,
    url
})

export const getSingleStory = async (storyId) => {
    //storyId will be provided when we use this function in the StoriesContainer
    const story = await axios.get(`${storyUrl + storyId}.json`)
            .then(({data}) => data && selectedFields(data));

    return story;
}
