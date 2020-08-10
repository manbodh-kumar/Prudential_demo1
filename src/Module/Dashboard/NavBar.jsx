import React, {useRef, useState, useEffect} from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Route, NavLink , BrowserRouter as Router } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles(() => ({
    navbar: {
        display: 'flex',
        width: '100%',
        border: '1px solid',
        marginTop: '50px',
    },
    navItemBlock: {
        display: 'flex',
    },
    ul: {
        display: 'flex',
        width: '300px',
        paddingLeft: '15px',
        justifyContent: 'space-between',
        '& li': {
            display: 'inline-block',
            minWidth: '50px',
        }
    },
    searchFieldBlock: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '24px',
    },
    search: {
        '& div': {
            height: '30px',
        }
    },
    dropDownBlock: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '10px',
        marginLeft: 'auto',
    },
    dropdown: {
        '& div': {
            height: '30px',
        }
    },
    active: {
        color: 'red',
        borderBottom: '3px solid red',
    },
}));


const NavBar = () => {
    const classes = useStyles();
    const options =  ["By Business", "By Company", "By Company Dictionary", "By Date"];
    return (
        <div className={classes.navbar}>
            <div className={classes.navItemBlock}>
                <ul className={classes.ul}>
                    <NavLink exact activeClassName={classes.active} to="/"><li>Virtual Archive</li></NavLink>
                    <NavLink activeClassName={classes.active} to="/advanced-search"><li>Advanced Search</li></NavLink>
                    <NavLink activeClassName={classes.active} to="/browse"><li>Browse</li></NavLink>
                </ul>
            </div>
            <div className={classes.dropDownBlock}>
                <FormControl variant="outlined" className={classes.dropdown}>
                    <Select
                        native
                        value="All Virtual Archieve"
                        onChange={() => {}}
                    >
                        {_.map(options, option => (<option value={option}>{option}</option>))}
                    </Select>
                </FormControl>
            </div>
            <div className={classes.searchFieldBlock}>
                <TextField
                    variant="outlined"
                    className={classes.search}
                    placeholder="Search"
                />
            </div>
        </div>
    );
};

export default NavBar;