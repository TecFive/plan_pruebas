import { useRoutes } from 'react-router-dom';
import MainRoutes from './mainRoutes.js';

export default function ThemeRoutes() {
    return useRoutes([MainRoutes]);
}
