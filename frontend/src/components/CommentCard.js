import React from 'react';

import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


function CommentCard(props) {
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar />
                </ListItemAvatar>
                <ListItemText
                    primary = {props.author}
                    secondary={
                        <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body1"
                                color="text.primary"
                        >
                            {" - "} {props.content}
                        </Typography>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
}


export default CommentCard
