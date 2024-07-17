import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DrawerMenu from './DrawerMenu';

const Navbar = () => {
  const [value, setValue] = useState(0);
  const [indicatorColor, setIndicatorColor] = useState('#dda116');

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
    const newColor = newValue === 0 ? '#dda116' : '#1a1a1a';
    setIndicatorColor(newColor);
  };

  const pages = ["Home", "Editor"];

  return (
    <>
      <AppBar sx={{ background: '#282828' }}>
        <Toolbar>
          <CodeIcon sx={{ fontSize: '50px', color: '#dda116' }}  />

          <Typography>
            CodeCrafter
          </Typography>

          {
            isMatch ? (
              <DrawerMenu />
            ) : (
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="inherit"
                sx={{
                  '& .MuiTabs-indicator': {
                    backgroundColor: indicatorColor,
                  },
                }}
              >
                {pages.map((page, index) => (
                  <Tab
                    key={index}
                    label={page}
                    component={Link}
                    to={`/${page.toLowerCase()}`} 
                  />
                ))}
              </Tabs>
            )
          }

          {
            !isMatch && (
              <>
                <Button
                  component={Link}
                  to="/login"
                  sx={{ marginLeft: 'auto', background: '#dda116', color: '#fff' }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  sx={{ marginLeft: '10px', background: '#dda116', color: '#fff' }}
                >
                  Sign Up
                </Button>
              </>
            )
          }
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
