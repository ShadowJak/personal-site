import { useState } from "react";
import classes from './SlideNav.module.scss';
import { Code, Group, NavLink, ScrollArea, Stack } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { IconChartHistogram, IconCpu } from "@tabler/icons-react";
import { SlideMenu } from "./SlideMenu/SlideMenu";
import { Content } from "../Content/Content";
import { SlideSubMenu } from "./SlideMenu/SlideSubMenu";

export const SlideNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');
    const [content, setContent] = useState();

    const handleClick = (tab: number) => {

    }

    return (<>
        <SlideMenu onClick={handleClick}/>
        <SlideSubMenu onClick={handleClick} category={'Finance'} />
        <SlideSubMenu onClick={handleClick} category={'Technology'} />
        <Content />
    </>)
}