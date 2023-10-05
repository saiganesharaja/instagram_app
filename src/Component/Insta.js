

import Box from '@mui/material/Box';
// import image from './images/Screenshot 2023-07-25 120231.png';z
import Grid from '@mui/material/Grid';

import Post from './Post';
import Status from './Status';
import Follow from './Follow';
import Profile from './Profile';


export default function Insta() {
    return (
        <Box>
            <Grid container spacing={0}>
                <Grid item xs={3}>
<Profile/>
                   </Grid>

                <Grid item xs={6}>
                    <Status />
                    <Post />
                </Grid>
                <Grid item xs={3}>
                    <Follow />
                </Grid>
            </Grid>
        </Box>

    );
}