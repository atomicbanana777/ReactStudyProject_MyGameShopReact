import { Outlet } from 'react-router';
import MyNavbar from '../components/MyNavbar';
import MyFooter from '../components/MyFooter';

const MainLayout = () => {
    return (
        <>
            <MyNavbar />
            <Outlet />
            <MyFooter />
        </>
    )
}

export default MainLayout;