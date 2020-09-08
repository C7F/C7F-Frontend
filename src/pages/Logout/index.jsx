import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { tokenUpdate, loggedInUpdate } from '../../slices/teamSlice';

export default function Logout() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(tokenUpdate(''));
        dispatch(loggedInUpdate(false));
        history.push('/');
    });

    return <></>;
}
