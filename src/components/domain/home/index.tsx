import React, { useEffect } from 'react';
import useUserInfo from '@/hooks/useUserInfo';
import axios from 'axios';

export default function Home() {
    const { actions, dispatch } = useUserInfo();

    useEffect(() => {
        axios
            .post('http://localhost:8080/user/sign/in', { email: 'jskim91@starlabs.co.kr', passwd: 'test1234@' })
            .then((res) => {
                const { id, email, accessToken, name } = res.data.data;
                dispatch(actions.set({ id, email, token: accessToken, name }));

                setTimeout(() => {
                    dispatch(actions.init());
                }, 5000);
            });
    }, []);

    return (
        <div>
            <h1>홈</h1>
            <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠.</p>
        </div>
    );
}
