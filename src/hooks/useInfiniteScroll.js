import {useState, useEffect} from 'react';
import {MAX_STORIES, STORY_INCREMENT} from '../constants';

export const useInfiniteScroll = () => {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(STORY_INCREMENT);

    const handleScroll = () => {
        console.log("WINDOWWWW...", window);
    }

    handleScroll();
}
