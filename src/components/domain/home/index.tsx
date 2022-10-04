import React from 'react'
// import { ReactComponent as Logo } from '@/assets/images/logo.svg'
// import logo from '@/assets/images/logo192.png'
// import useUserInfo from '@/hooks/useUserInfo'
// import useUserApi from '@/core/store/api/providers/user'

export default function Home() {
    // const { userLogin } = useUserApi()
    // const { dispatch, actions, userInfo } = useUserInfo()

    // useEffect(() => {
    //     userLogin.postUserSignIn({ email: 'jskim91@starlabs.co.kr', passwd: 'test1234@' }).then((res) => {
    //         if (res?.success) {
    //             console.log('res.data => ', res.data)
    //             const { id, accessToken, email, name, refreshToken } = res.data
    //             dispatch(actions.set({ id, accessToken, email, name, refreshToken }))
    //         }
    //     })
    // }, [])

    return (
        <div>
            {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <Logo fill="#FF0000" width={32} height={32} />
                </div>
                <div style={{ letterSpacing: -1, marginLeft: 4 }}>
                    <h1 style={{ color: '#c00', fontFamily: 'medium', fontSize: 20 }}>Pinterest</h1>
                </div>
            </div> */}
            <h1>홈</h1>
            <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠.</p>
        </div>
    )
}
