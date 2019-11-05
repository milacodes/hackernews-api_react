//THIS WILL RENDER ALL PARENT COMPONENTS
import React, {useEffect, useState} from 'react';
//useState can store values
import {getStoryIds} from './services/hnApi';
import {StoriesContainer} from './containers/StoriesContainer'


export const App = () => {

    return (
        <StoriesContainer />
    )
}
