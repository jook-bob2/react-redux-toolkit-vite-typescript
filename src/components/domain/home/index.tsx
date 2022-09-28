import useUserProvider from '@/core/store/api/providers/user';
import React, { useEffect } from 'react';

export default function Home() {
    const { userLogin } = useUserProvider();

    useEffect(() => {
        userLogin.postUserSignIn({ email: 'jskim91@starlabs.co.kr', passwd: 'test1234@' }).then((res) => {
            console.log('data => ', res.data);
        });
    }, []);

    return (
        <div>
            <h1>홈</h1>
            <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠.</p>
        </div>
    );
}
