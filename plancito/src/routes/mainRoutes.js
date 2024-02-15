import Layout from '../layout';
import Information from '../pages/information';
import Playground from '../pages/playground';
import Shop from '../pages/shop';


const MainRoutes = {
    path: '/',
    element: (
        <Layout />
    ),
    children: [
        {
            path: '/',
            element: <Information />
        },
        {
            path: '/playground',
            element: <Playground />
        },
        {
            path: '/shop',
            element: <Shop />
        }
    ]
};

export default MainRoutes;
