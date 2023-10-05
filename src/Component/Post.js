import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SendIcon from '@mui/icons-material/Send';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import React, { useState } from 'react';
const post = [

    {
        Image: "https://scontent.fvga4-1.fna.fbcdn.net/v/t39.30808-6/357704998_2210843052586746_3226156400605024797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=pj2wqZduCxcAX9NvOVx&_nc_ht=scontent.fvga4-1.fna&oh=00_AfCRjTnBca1tR-Drjz_mlQamHkwrZMQqALoC6UsYoKKYTQ&oe=651B1948",
        titel: "Namahsivaya .6 min",
        titel2: " Original audio",
        // icons: "@mui/icons-material/MoreHoriz",
        image1:
            "https://scontent.fvga4-1.fna.fbcdn.net/v/t39.30808-6/325465137_524975153062001_2204235665388336004_n.jpg?stp=dst-jpg_s640x640&_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=Lw3s_yWREFcAX_6n41D&_nc_ht=scontent.fvga4-1.fna&oh=00_AfDMSCpJPng00JvRh1YKhCYxGGVgvcEOsJzBtsFrHs3EnQ&oe=651AA85C",
        text: " 144 likes",
        text1: " all comments",
        text2: "add your comment",
        liked: false ,

    },

    {
        Image: "https://scontent.fvga4-1.fna.fbcdn.net/v/t39.30808-6/376900061_1127373701557213_7299482293525246282_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=nmaon6yINqwAX_Jq-q6&_nc_ht=scontent.fvga4-1.fna&oh=00_AfC1zi2gwxLnr4LKuEtDHeTGUUSAqtZJEMEHdBgCkkLJCw&oe=651B08F2",
        titel: "pspk .1 d",
        titel2: " Original audio",
        image1:
            "https://scontent.fhyd9-1.fna.fbcdn.net/v/t39.30808-6/384986658_1723137114825751_3663746722136158034_n.jpg?stp=dst-jpg_s640x640&_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=93Vs0xoukuYAX_SEHn8&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfDMqj46C60F5hK6hSxmaG8rUD18C6yVIOSCbOaF0ZIqKQ&oe=6519DF9A",

        text: " 144 likes",
        text1: " all comments",
        text2: "add your comment",
        liked: false,
    },
    {
        Image: "https://media.istockphoto.com/id/1092744530/photo/st-valentines-day-red-bokeh-background-with-love-heart-place-for-text.webp?b=1&s=170667a&w=0&k=20&c=sZiOlIf4fKbomMYXYFsOyII8Xk62-ehJ49Ejj6cJ978=",
        titel: " Tulasi .2d",
        titel2: " copy",
        image1:
            "https://scontent.fvga4-1.fna.fbcdn.net/v/t39.30808-6/304741800_628649668693802_8813301097247625566_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=_7hnG-tdQsIAX8a0kJ-&_nc_ht=scontent.fvga4-1.fna&oh=00_AfASydXa3PXYyIP1gfTUNbSFWC8hSuykIMGgQGHjsS-LCg&oe=651BF947",
        text: " 144 likes",
        text1: " all comments",
        text2: "add your comment",
        liked: false,
    },
    {
        Image: "https://media.istockphoto.com/id/1097779446/photo/cloud-heart-in-the-sky-in-the-clouds-and-sunshine.jpg?s=1024x1024&w=is&k=20&c=ocPumC00uxhKNA6Mq3NqMaZNav0ASZo5e8vlUCUwzM4=",
        titel: " Durga .2d",
        titel2: " snapchat",
        HomeIcon: "HomeIcon",
        image1:
            "https://scontent.fhyd9-1.fna.fbcdn.net/v/t39.30808-6/279209631_112433434782766_7074078634978730747_n.jpg?stp=c0.66.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=3OkdiVxhAUgAX8bJfcI&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfByryyRu4q3amVIN_NukrswL7jTdj9ri_h09kHhga4fqg&oe=651A757B",
        text: " 144 likes",
        text1: " all comments",
        text2: "add your comment",
        liked: false,
    },

];

export default function Post() {
    const [posts, setPosts] = useState(post);
    const likeHandler = (event, index) => {
        const updatedPost = posts[index];
        updatedPost.liked = !updatedPost.liked;
        const updatedPosts = [
            ...posts.slice(0, index),
            updatedPost,
            ...posts.slice(index + 1),
        ];
        setPosts(updatedPosts);
    };
    

    return (

        <Grid container style={{ padding: 15, margin: 10 }}>




            {post.map(({ Image, titel, titel2, text, text1, text2, image1, liked }, i) => (

                <Grid item style={{ padding: "50px" }}>




                    <Card sx={{ maxWidth: 352 }}>
                        <CardHeader
                            avatar={
                                <Avatar>
                                    <img style={{ height: 70, width: 70, borderRadius: 50 }} src={Image} />
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreHorizIcon />
                                </IconButton>
                            }
                            title={titel}
                            subheader={titel2}
                        />
                        <CardMedia
                            component="img"
                            height="400"
                            width="800"
                            image={image1}
                            alt="Paella dish"
                        />

                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon color={liked ? "error" : "inherit"}
                                    onClick={(e) => likeHandler(e, i)}
                                />
                            </IconButton>
                            <IconButton aria-label="add to massage">
                                <ChatBubbleIcon />
                            </IconButton>
                            <IconButton aria-label="add to favorites">
                                <SendIcon />
                            </IconButton>

                            <IconButton style={{ marginLeft: 90 }} aria-label="share">
                                <TurnedInNotIcon />
                            </IconButton>

                        </CardActions>
                        <Typography>
                            <Grid>
                                {text}
                            </Grid>
                            <Grid>
                                {text1}
                            </Grid>
                            <Grid>
                                {text2}

                            </Grid>
                        </Typography>


                    </Card>




                </Grid>

            ))}
        </Grid>


    );
}