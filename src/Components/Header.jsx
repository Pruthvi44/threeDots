import * as React from "react";
import "./Header.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import logoimg from "../Assets/images/Homeimg/logo-icon-fill.png";
import { Link } from "react-router-dom";



export default function Header() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 1050 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="menu">
        <table className="nav-menu">
          <tr>
            <td ><Link id="link" to="/about">About</Link></td>
            <td><Link id="link" to="/accolades">Accolades</Link></td>
            <td><Link id="link" to="/hydrabad">Hydrabad</Link></td>
          </tr>
          <tr>
            <td><Link id="link" to="/work">Work</Link></td>
            <td>Digital</td>
            <td><Link id="link" to="/blog">Blog</Link></td>
          </tr>
          <tr>
            <td>Solution</td>
           <td> <Link id="link" to="/">Pune</Link></td>
            <td>Career</td>
          </tr>
          <tr>
            <td></td>
            <td><Link id="link" to="/contact">Contact</Link></td>
          </tr>
        </table>
        
      </List>

    </Box>
  );

  return (
    <>
      <div className="left-block">
      <Link to="/"><img src={logoimg} /></Link>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button id="menu-btn" onClick={toggleDrawer(anchor, true)}>
             <DensitySmallIcon fontSize="x15" />
            </Button>

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
