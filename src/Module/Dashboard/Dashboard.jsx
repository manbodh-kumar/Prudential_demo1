import React from 'react';
import { makeStyles } from '@material-ui/core';
import { NavLink } from  'react-router-dom';
import Typography from '@material-ui/core/Typography';

import customer from './customer.jpg';


const useStyles = makeStyles(() => ({
    block: {
        paddingTop: '40px',
        display: 'flex',
        widht: '100%',
        minWidth: '360px',
    },
    leftBlock: {
        minWidth: '360px',
        display: 'flex',
        flexDirection: 'column',
        width: '33%',
        padding: '15px',
    },
    imgBlock: {
        minWidth: '360px',
        width: '33%',
        backgroundColor: '#cccccc',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    minWidth: '360px',
        rightBlock: {
        display: 'flex',
        '& ul': {
            display: 'flex',
            flexDirection: 'column',
            margin: '0px',
            height: '300px',
            justifyContent: 'space-between',
            '& a': {
                textDecoration: 'none',
            },
            '& li': {
                display: 'flex',
                height: '30px',
                fontWeight: 'bold',
                color: 'blue',
            }
        }
    },
    welcome:{
        fontWeight: 'bold',
    },
    active: {
        textDecorationStyle: 'underLine'
    },
}));



const Dashboard = () => {
    const classes = useStyles();
    return (
        <div className={classes.block}>
            <div className={classes.leftBlock}>
                <Typography variant="h5" color="secondary" className={classes.welcome}>
                    Welcome
                </Typography>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus autem temporibus facere quae aspernatur earum ab itaque molestias eveniet odit.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quis. Ullam id, possimus nisi eius, distinctio, ut quis inventore debitis commodi aliquid ex mollitia nostrum ad aperiam ea quasi iure?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel debitis libero distinctio sint velit?
                </p>           
            </div>
            <div className={classes.imgBlock} style={{backgroundImage: `url(${customer})`}}>
            </div>
            <div className={classes.rightBlock}>
                <ul>
                    <NavLink activeClassName="active" to="/annual-reports"><li>Annual Reports</li></NavLink>
                    <NavLink activeClassName="active" to="/press-release"><li>Press Release</li></NavLink>
                    <NavLink activeClassName="active" to="/advertising-posters"><li>Advertising Posters</li></NavLink>
                </ul>
            </div>
        </div>  
    );
};

export default Dashboard;