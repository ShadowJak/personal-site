import { useState } from "react";
import classes from './SlideSubMenu.module.scss';
import { Code, Group, NavLink, ScrollArea, Stack } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { IconChartHistogram, IconCpu } from "@tabler/icons-react";

interface iSlideSubMenuProps {
    category: string;
}

export const SlideSubMenu = (props: iSlideSubMenuProps) => {
    const { category } = props;
    
    const getBG = () => {
        if (category === 'Finance') {
            return 'linear-gradient(135deg, #006000, #003000)';
        } else if (category === 'Technology') {
            return 'linear-gradient(135deg, #000060, #000030)';
        }
    }

    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (tab: number) => {

    }

    return (
        <div className={classes.navContainer} style={{background: getBG()}}>
            <Group className={classes.navHeader} justify='space-between'>
                <div className={classes.navHeaderContents}>
                    <MantineLogo size={28} style={{ marginRight: '2em', color: 'var(--mantine-color-pumpkin-9)' }} />
                    <div style={{ flexGrow: 1 }} />
                    <Code className={classes.navCode} fw={700}>v3.1.2</Code>
                </div>
            </Group>
            <ScrollArea className={classes.navScrollArea} type="scroll" h='100%' w='220px'>
                <Stack className={classes.navStack} gap='0'>
                    <NavLink
                        className={classes.navLinkParent}
                        label={`${category}`}
                        leftSection={<IconChartHistogram className={classes.navLinkIcon} size={25} />}
                        childrenOffset={12}
                    ></NavLink>
                    <NavLink
                        className={classes.navLinkParent}
                        label="Technology"
                        leftSection={<IconCpu className={classes.navLinkIcon} size={25} />}
                        childrenOffset={12}
                    ></NavLink>
                </Stack>
            </ScrollArea>
            <div className={classes.navFooter}>
                <NavLink
                    className={classes.navLinkParent}
                    label="Foot"
                    leftSection={<IconChartHistogram className={classes.navLinkIcon} size={25} />}
                />
            </div>
        </div>
    )
}