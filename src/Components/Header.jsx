import * as React from 'react';
import './Header.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import logoimg from '../Assets/images/logo-icon-fill.png';

export default function Header() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 1050 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='menu'>
       <table className='nav-menu'>
        <tr>
          <td>About</td>
          <td>Accolades</td>
          <td>Hydrabad</td>
        </tr>
        <tr>
          <td>Work</td>
          <td>Digital</td>
          <td>Blog</td>
        </tr>
        <tr>
          <td>Solution</td>
          <td>Pune</td>
          <td>Career</td>
        </tr>
        <tr>
          <td></td>
          <td>Contact</td>
        </tr>
       </table>
      </List>
    </Box>
  );

  return (
    <>
    
    <div className='left-block'>
      <img src={logoimg}/>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          
          <Button id='menu-btn' onClick={toggleDrawer(anchor, true)}><DensitySmallIcon fontSize="x15"/></Button>
        
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    </>
  );
}
