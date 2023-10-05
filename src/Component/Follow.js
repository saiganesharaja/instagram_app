import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
export default function Follow() {
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
    return (

        <Grid container style={{ padding: 5 }}>
            {follow.map(({ title3, title4, title6, title7, item5, image3 }, i) => (
                <Grid item>
                    <Box style={{ display: "flex" }}>
                        <Box>
                            <img style={{ height: 70, width: 70, borderRadius: 50, margin: 10, }} src={image3} />

                        </Box>

                        <Grid style={{ display: "flex" }}> <Grid> <Box>{title3}</Box> <Box>{title4}</Box> </Grid><Grid style={{ paddingLeft: '30px' }}>{item5}</Grid></Grid>

                    </Box>
                    <Box style={{ display: "flex", padding: "10px" }}> <Box style={{ padding: "0px 30px", fontSize: "smoll" }}>{title6}</Box><Box style={{ color: "blue", marginLeft: "30px" }}>{title7}</Box></Box>
                </Grid>
            ))}
        </Grid>


    );
}