import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useQuery } from '../../hooks';

import { fetchTokenUsingToken } from '../../slices/teamSlice';

export default function TokenLogin() {
    const query = useQuery();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        const loginToken = query.get('loginToken');

        if (!loginToken) {
            history.push('/login');
            return;
        }

        dispatch(fetchTokenUsingToken({ loginToken }))
            .then(() => history.push('/'))
            .catch(console.log);
    });

    return <></>;
}
