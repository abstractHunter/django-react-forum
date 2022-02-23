import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function PostCard(props) {
    const title = props.title
    //const author = props.author
    const content = props.content
    //const date = props.created

    return (
        <Card sx={{ maxWidth: 800 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    {/* <Typography gutterBottom variant="h6" component="div">
                        {author}
                    </Typography> */}
                    <Typography variant="body1" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PostCard
