import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
export default function Status() {
    const dp = [
        {
            image1:
                "https://scontent.fhyd9-1.fna.fbcdn.net/v/t39.30808-6/339977201_920775562567355_588915102464738069_n.jpg?stp=dst-jpg_s640x640&_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=rMtA11-vc2sAX87oyFe&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfDiUgnX1Om5jGT0pCpCSNlnPdyeEqA8vvFY7amoMpIsXw&oe=651B183D",
            title1: "siva",
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
        {
            image1:
                "https://scontent.fhyd9-1.fna.fbcdn.net/v/t39.30808-6/384986658_1723137114825751_3663746722136158034_n.jpg?stp=dst-jpg_s640x640&_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=93Vs0xoukuYAX_SEHn8&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfDMqj46C60F5hK6hSxmaG8rUD18C6yVIOSCbOaF0ZIqKQ&oe=6519DF9A",
            title1: "ganesh",

        },
        {
            image1:
                "https://scontent.fvga4-1.fna.fbcdn.net/v/t39.30808-6/304741800_628649668693802_8813301097247625566_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=_7hnG-tdQsIAX8a0kJ-&_nc_ht=scontent.fvga4-1.fna&oh=00_AfASydXa3PXYyIP1gfTUNbSFWC8hSuykIMGgQGHjsS-LCg&oe=651BF947",
            title1: "vayu",
        },
        {
            image1:
                "https://scontent.fhyd9-1.fna.fbcdn.net/v/t39.30808-6/279209631_112433434782766_7074078634978730747_n.jpg?stp=c0.66.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=3OkdiVxhAUgAX8bJfcI&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfByryyRu4q3amVIN_NukrswL7jTdj9ri_h09kHhga4fqg&oe=651A757B",
            title1: "sai",
        },

    ];
    return (

        <Grid container style={{ padding: 15, margin: 10 }}>
            {dp.map(({ title1, image1 }, i) => (
                <Grid item>
                    <Box style={{ display: "flex", padding:5 }}>

                        <img style={{ height: 50, width: 50, borderRadius: 50, border: "2px solid red" }} src={image1} />


                    </Box>
                    <Box style={{marginleft:100 }}> {title1}</Box>
                </Grid>
            ))}
        </Grid>
    );
}