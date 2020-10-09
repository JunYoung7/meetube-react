import Upload from '../views/ui-components/upload.jsx';
import Detail from '../views/ui-components/detail.jsx';
import Videos from '../views/ui-components/videos.jsx';

var ThemeRoutes = [
  {
    path: '/ui-components/card',
    name: 'Videos',
    icon: 'mdi mdi-credit-card-multiple',
    component: Videos
  },
  {
    path: '/ui-components/upload',
    name: 'Upload',
    icon: 'mdi mdi-toggle-switch',
    component: Upload
  },
  {
    path: '/ui-components/button',
    name: 'Test',
    icon: 'mdi mdi-toggle-switch',
    component: Detail
  },

  {
    path: '/',
    pathTo: '/ui-components/card',
    name: 'Dashboard',
    redirect: true
  }
];
export default ThemeRoutes;
