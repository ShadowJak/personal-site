import { NavLink, ScrollArea, Stack } from '@mantine/core';
import {
  IconChartHistogram,
  IconCpu
} from '@tabler/icons-react';
import './Menu.module.scss'
import classes from './Menu.module.scss'
import { useState } from 'react';


export const NavbarNested = () => {
  const [active, setActive] = useState('');

  return (
    <ScrollArea className={classes.navbarRoot} type="scroll" h="100%" w="220px">
      <Stack gap="0">
        <NavLink
          className={classes.navLinkParent}
          label="Finance"
          leftSection={<IconChartHistogram size={25} />}
          childrenOffset={12}
        >
          <NavLink
            className={classes.navLinkChild}
            label="Debunking TA"
            data-active={active === "Debunking TA" || undefined}
            onClick={(event) => {
              event.preventDefault();
              if (active === "Debunking TA") {
                setActive('');
              } else {
                setActive("Debunking TA");
              }
            }} />
          <NavLink
            className={classes.navLinkChild}
            label="Economics of AI"
            data-active={active === "Economics of AI" || undefined}
            onClick={(event) => {
              event.preventDefault();
              if (active === "Economics of AI") {
                setActive('');
              } else {
                setActive("Economics of AI");
              }
            }} />
        </NavLink>

        <NavLink
          className={classes.navLinkParent}
          label="Technology"
          leftSection={<IconCpu size={25} />}
          childrenOffset={12}
        >
          <NavLink
            className={classes.navLinkChild}
            label="Explaining LLMs"
            data-active={active === "Explaining LLMs" || undefined}
            onClick={(event) => {
              event.preventDefault();
              if (active === "Explaining LLMs") {
                setActive('');
              } else {
                setActive("Explaining LLMs");
              }
            }} />
        </NavLink>
      </Stack>
    </ScrollArea>
  );
}
