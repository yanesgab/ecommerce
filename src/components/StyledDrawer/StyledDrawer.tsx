import { FunctionComponent } from 'react';
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

interface StyledDrawerProps {
  isOpen: boolean,
  setIsOpen: (value: boolean) => void
}

export const StyledDrawer: FunctionComponent<StyledDrawerProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Drawer
      anchor='left'
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Box
        sx={{ width: 260 }}
        role='presentation'
      >
        <List>
          {['View All', 'Dresses', 'Tops', 'Bottoms', 'Sweaters', 'Shoes'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
