import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.img`
    width: 80%;
`

const Home = () => {
    return(
        <div>
            <h1>Say hi to Friends</h1>
            <ImageWrapper src={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/friends-tv-show-cast-1994-1509035002.jpg'} alt='friends tv show characters'   />
        </div>
    )
}

export default Home;