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
    path: '/ui-components/detail/:title',
    name: 'Upload',
    icon: 'mdi mdi-toggle-switch',
    component: Detail
  },

  {
    path: '/ui-components/detail',
    name: 'Detail',
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
