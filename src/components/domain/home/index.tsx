import React from 'react';
// import React, { useEffect } from 'react';
// import useUserProvider from '@/core/store/api/providers/user';
// import useUserInfo from '@/hooks/useUserInfo';

export default function Home() {
    // const { userLogin } = useUserProvider();
    // const { dispatch, actions, userInfo } = useUserInfo();

    // useEffect(() => {
    //     userLogin.postUserSignIn({ email: 'jskim91@starlabs.co.kr', passwd: 'test1234@' }).then((res) => {
    //         if (res?.success) {
    //             console.log('res.data => ', res.data);
    //             const { id, accessToken, email, name, refreshToken } = res.data;
    //             dispatch(actions.set({ id, accessToken, email, name, refreshToken }));
    //         }
    //     });
    // }, []);

    return (
        <div>
            <h1>홈</h1>
            <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠.</p>
        </div>
    );
}
