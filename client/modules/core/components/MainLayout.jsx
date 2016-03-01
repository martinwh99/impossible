import React from 'react';
import {Grid, row, col, PageHeader} from 'react-bootstrap';


const Layout = ({content = () => null}) => (

    <Grid>
        <Row>
            <Col xs="{12">
                <PageHeader>Impossible List</PageHeader>
            </Col>
        </Row>

        {content()}

    </Grid>
);

export default Layout;