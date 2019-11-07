//THIS WILL RENDER ALL PARENT COMPONENTS
import React, {useEffect, useState} from 'react';
//useState: no need for a constructor to create state object!
import {getStoryIds} from './services/hnApi';
import {StoriesContainer} from './containers/StoriesContainer'


export const App = () => {

    return (
        <StoriesContainer />
    )
}
