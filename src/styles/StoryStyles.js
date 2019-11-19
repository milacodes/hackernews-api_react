import styled from 'styled-components';


export const StoryWrapper = styled.section`
    /* border: 2px solid green; */
    margin-bottom: 10px;
    padding-left: 10px;
    :not(:last-child){
        border-bottom: 2px solid lightslategray;
    }

`
export const StoryTitle = styled.a`
    text-decoration: none;
    display: inline-block;
    margin-bottom: -15px;
`
export const StoryMeta = styled.section`
    font-style: italic;
    > span:first-child{
        margin-left: 20px;
    }
    padding-bottom: 20px;
`
export const Bolded = styled.span`
    font-weight: bold;
`
