import AboutPage from '@/pages/about'
import AboutDetailPage from '@/pages/about/detail'
import CounterPage from '@/pages/counter'
import HomePage from '@/pages/home'

interface RouteType {
    key: number
    path: string
    element: () => JSX.Element
}

export const routes: RouteType[] = [
    {
        key: 1,
        path: '/',
        element: HomePage,
    },
    {
        key: 2,
        path: '/about',
        element: AboutPage,
    },
    {
        key: 3,
        path: '/about/detail',
        element: AboutDetailPage,
    },
    {
        key: 3,
        path: '/counter',
        element: CounterPage,
    },
]
