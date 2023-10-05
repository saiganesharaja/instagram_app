import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// import *as react from "react";
import Box from '@mui/material/Box';
// import image from './images/Screenshot 2023-07-25 120231.png';z
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from "@mui/material/ListItemButton";

import './App.css';
import { FormatItalic } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';// import item from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SendIcon from '@mui/icons-material/Send';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
const dp = [
    {
        image1:
            "https://scontent.fhyd9-1.fna.fbcdn.net/v/t39.30808-6/339977201_920775562567355_588915102464738069_n.jpg?stp=dst-jpg_s640x640&_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=rMtA11-vc2sAX87oyFe&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfDiUgnX1Om5jGT0pCpCSNlnPdyeEqA8vvFY7amoMpIsXw&oe=651B183D",
        title1: "Namahsivaya",
    },

    {
        image1:
            "https://scontent.fhyd9-1.fna.fbcdn.net/v/t39.30808-6/384986658_1723137114825751_3663746722136158034_n.jpg?stp=dst-jpg_s640x640&_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=93Vs0xoukuYAX_SEHn8&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfDMqj46C60F5hK6hSxmaG8rUD18C6yVIOSCbOaF0ZIqKQ&oe=6519DF9A",
        title1: "Power star",

    },
    {
        image1:
            "https://scontent.fvga4-1.fna.fbcdn.net/v/t39.30808-6/304741800_628649668693802_8813301097247625566_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=_7hnG-tdQsIAX8a0kJ-&_nc_ht=scontent.fvga4-1.fna&oh=00_AfASydXa3PXYyIP1gfTUNbSFWC8hSuykIMGgQGHjsS-LCg&oe=651BF947",
        title1: "Tulasi",
    },
    {
        image1:
            "https://scontent.fhyd9-1.fna.fbcdn.net/v/t39.30808-6/279209631_112433434782766_7074078634978730747_n.jpg?stp=c0.66.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=3OkdiVxhAUgAX8bJfcI&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfByryyRu4q3amVIN_NukrswL7jTdj9ri_h09kHhga4fqg&oe=651A757B",
        title1: "Durga",
    },

];
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
    },

];
const follow = [
    {
        image3: "https://scontent.fhyd9-1.fna.fbcdn.net/v/t39.30808-6/301657920_1106093930285915_1899843705772787604_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_ohc=gfCzyaFl2QMAX8euIEg&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfDnz7HHQIBVBuK46QjGsLftQwsxJFHA8g4_c9IsEvH4hQ&oe=651C9FBE",
        title3: "Ganesh_araja",
        title4: "Ganesh_araja",
        item5: "Swich",


        title6: "Sugitions for you",
        title7: "See All",
    },

    {
        image3:
            "https://scontent.fhyd9-1.fna.fbcdn.net/v/t39.30808-6/339977201_920775562567355_588915102464738069_n.jpg?stp=dst-jpg_s640x640&_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=rMtA11-vc2sAX87oyFe&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfDiUgnX1Om5jGT0pCpCSNlnPdyeEqA8vvFY7amoMpIsXw&oe=651B183D",
        title3: "Namahsivaya",
        title4: "followed by tulasi",
        item5: "Follow",
    },

    {
        image3:
            "https://scontent.fhyd9-1.fna.fbcdn.net/v/t39.30808-6/384986658_1723137114825751_3663746722136158034_n.jpg?stp=dst-jpg_s640x640&_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=93Vs0xoukuYAX_SEHn8&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfDMqj46C60F5hK6hSxmaG8rUD18C6yVIOSCbOaF0ZIqKQ&oe=6519DF9A",
        title3: "Power star",
        title4: "followed by prasad",
        item5: "Follow",


    },
    {
        image3:
            "https://scontent.fvga4-1.fna.fbcdn.net/v/t39.30808-6/304741800_628649668693802_8813301097247625566_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=_7hnG-tdQsIAX8a0kJ-&_nc_ht=scontent.fvga4-1.fna&oh=00_AfASydXa3PXYyIP1gfTUNbSFWC8hSuykIMGgQGHjsS-LCg&oe=651BF947",
        title3: "Tulasi",
        title4: "followed by siva",
        item5: "Follow",
    },
    {
        image3:
            "https://scontent.fhyd9-1.fna.fbcdn.net/v/t39.30808-6/279209631_112433434782766_7074078634978730747_n.jpg?stp=c0.66.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=3OkdiVxhAUgAX8bJfcI&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfByryyRu4q3amVIN_NukrswL7jTdj9ri_h09kHhga4fqg&oe=651A757B",
        title3: "Durga",
        title4: "followed by Ganesh",
        item5: "Follow",
    },

];
export default function Instagram() {
    return (
        <box>
            <Grid container spacing={3}>
                <Grid item xs={3}>

                    <List style={{ borderRight: "1px solid black", position: "fixed" ,padding:"30px"}}>
                        {/* <h2>Instagram</h2> */}
                        <svg aria-label="Instagram"  style={{ padding:"20px"}}class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="29" role="img" viewBox="32 4 113 32" width="103" ><path clip-rule="evenodd" d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z" fill="currentColor" fill-rule="evenodd"></path></svg>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SearchIcon fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Search" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ExploreIcon fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Explore" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SlideshowIcon fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Reels" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MarkUnreadChatAltIcon fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="messages" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <FavoriteBorderIcon fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Notificatin" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AddBoxIcon fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="create" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <img src="https://scontent.fvga4-1.fna.fbcdn.net/v/t39.30808-6/359426399_1311423326419640_2636901529652643073_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_ohc=pMGgV8FRaWYAX_jk0P_&_nc_ht=scontent.fvga4-1.fna&oh=00_AfBd0fm6tdMyd4grpkZT5bxO8XiP88oJTb0LQKJBhV1rYA&oe=651ADBF6" style={{ width: 40, height: 40, borderRadius: 90 }} />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton style={{ marginTop: 20 }}>
                                <ListItemIcon>
                                    <DensityMediumIcon fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="More" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>

                <Grid item xs={6}>
                    <Box>


                        <Grid container style={{ padding: 15, margin: 10 }}>
                            {dp.map(({ title1, image1 }, i) => (
                                <Grid item>
                                    <Box style={{ display: "flex", padding: 5 }}>

                                        <img style={{ height: 70, width: 70, borderRadius: 50, margin: 10, border: "2px solid red" }} src={image1} />


                                    </Box>
                                    <Box> {title1}</Box>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container style={{ padding: 15, margin: 10 }}>




                            {post.map(({ Image, titel, titel2,  text, text1, text2, image1 }, i) => (

                                <Grid item style={{padding:"50px"}}>




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
                                                <FavoriteIcon />
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


                    </Box>

                </Grid>
                <Grid item xs={3}>
                    <Grid container style={{ padding: 5 }}>
                        {follow.map(({ title3, title4, title6, title7, item5, image3 }, i) => (
                            <Grid item>
                                <Box style={{ display: "flex" }}>
                                    <Box>
                                        <img style={{ height: 70, width: 70, borderRadius: 50, margin: 10, }} src={image3} />

                                    </Box>

                                    <Box style={{ display: "flex", }}> <Box style={{ padding: "10px" }}>{title3} <Box fontSize="small"> {title4}</Box></Box> <Box style={{ marginLeft: "40px",color:"blue" }}>{item5}</Box></Box>

                                </Box>
                                <Box style={{ display: "flex", padding: "10px" }}> <Box style={{ padding: "0px 30px", fontSize: "smoll"}}>{title6}</Box><Box style={{color:"blue",marginLeft:"30px" }}>{title7}</Box></Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>


        </box>

    );
}
