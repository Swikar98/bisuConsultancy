import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';

const Aus = dynamic(() => import('../../component/Abroad/Aus'), { ssr: false });
const Canada = dynamic(() => import('../../component/Abroad/Canada'), { ssr: false });

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: isSmallScreen ? 'center' : 'flex-start',
          
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: isSmallScreen ? 'none' : 'block',
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Tabs
            orientation={isSmallScreen ? 'horizontal' : 'vertical'}
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: isSmallScreen ? 0 : 1, borderColor: 'divider' }}
          >
            <Tab label="Study in Australia" {...a11yProps(0)} />
            {/* <Tab label="Study in Canada" {...a11yProps(1)} /> */}
            {/* Additional tabs */}
          </Tabs>
        </Box>
      </Box>
      <Box
        sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <TabPanel value={value} index={0}>
          <Aus />
        </TabPanel>
        {/* <TabPanel value={value} index={1}>
          <Canada />
        </TabPanel> */}
        {/* Additional TabPanels */}
      </Box>
    </Box>
  );
}
