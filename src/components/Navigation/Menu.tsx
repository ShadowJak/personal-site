import { NavLink, ScrollArea, Stack } from '@mantine/core';
import {
  IconChartHistogram,
  IconCpu
} from '@tabler/icons-react';
import './Menu.module.scss'
import classes from './Menu.module.scss'


export function NavbarNested() {
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
            label="Debunking TA" />
            <NavLink
            className={classes.navLinkChild}
            label="Economics of AI" />
        </NavLink>

        <NavLink
          className={classes.navLinkParent}
          label="Technology"
          leftSection={<IconCpu size={25} />}
          childrenOffset={12}
        >
          <NavLink
            className={classes.navLinkChild}
            label="Explaining LLMs" />
        </NavLink>
      </Stack>
    </ScrollArea>
  );
}
