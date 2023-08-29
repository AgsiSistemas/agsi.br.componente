import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, { Fragment, useEffect, useState } from 'react';

export function TabPanel({ children, value, index, className, ...other }) {

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      className={`tabpanel-${className}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingTop: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index, className) {
  return {
    id: `simple-tab-${index}`,
    className: `tabpanel${className}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const OperationTab = ({ activeTab, menuList, childrenList, footer, className, classNameChildren, disableRipple, tabIndicatorProps, ...props }) => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (activeTab && activeTab !== value) {
      setValue(activeTab)
    }
  }, [activeTab])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>

      <Tabs
        className={className}
        value={value}
        onChange={handleChange}
        aria-label="tabs"
        TabIndicatorProps={tabIndicatorProps}
        {...props}
      >
        {menuList?.map((item, index) => {
          return (
            <Tab disableRipple={disableRipple} label={item.title} {...a11yProps(index, className)} />
          )
        })}
      </Tabs>

      {childrenList?.map((item, index) => {
        return (
          <TabPanel value={value} index={index} className={className}>
            {item}
          </TabPanel>
        )
      })}

      <Box sx={{ paddingTop: '15px' }}>
        {footer && footer}
      </Box>

    </Fragment>
  );
}

OperationTab.propTypes = {

  menuList: PropTypes.array,
  childrenList: PropTypes.array,
  footer: PropTypes.node,
  className: PropTypes.string,
  classNameChildren: PropTypes.string,
  disableRipple: PropTypes.bool,
  tabIndicatorProps: PropTypes.object

}

OperationTab.defaultProp = {
  menuList: [],
  childrenList: [],
  footer: <></>,
  className: '',
  classNameChildren: '',
  disableRipple: false,
  tabIndicatorProps: {}
}

export default OperationTab