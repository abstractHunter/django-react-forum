import { Container } from '@mui/material';
import React from 'react';

function Layout({children}) {
    return (
        <Container maxWidth="md">
            {children}
        </Container>
    )
}

export default Layout