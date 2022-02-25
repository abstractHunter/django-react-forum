import React from 'react';
import {
    Button,
    Typography,
    CardContent,
    Card
} from '@mui/material';

function PostCard(props) {
    const title = props.title
    const author = props.author
    const content = props.content
    const postId = props.postId
    //const date = props.created

    return (
        <Card sx={{ maxwidth: "md" }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {"[ " + author + " ]  - " + title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {content}
                </Typography>
                <Button 
                    variant="contained"
                    disableElevation
                    href={"/post/" + postId}
                >
                    More 
                </Button>
            </CardContent>
        </Card>
    )
}

export default PostCard
