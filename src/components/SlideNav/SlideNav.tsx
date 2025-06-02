import { useState } from "react";
import classes from './SlideNav.module.scss';
import { Code, Group, NavLink, ScrollArea, Stack } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { IconChartHistogram, IconCpu } from "@tabler/icons-react";
import { SlideMenu } from "./SlideMenu";

export const SlideNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (tab: number) => {

    }

    return (<>
        <SlideMenu />
    </>)
}