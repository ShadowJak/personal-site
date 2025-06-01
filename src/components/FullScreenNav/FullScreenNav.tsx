import React, { useState } from 'react';

export const FullScreenNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (tab: number) => {
        if (isOpen) {
            setActiveTab(0);
            setIsOpen(false);
        } else {
            switch (tab) {
                case 1:
                    setActiveTab(1);
                    setIsOpen(true);
                    break;
                case 2:
                    setActiveTab(2);
                    setIsOpen(true);
                    break;
                case 3:
                    setActiveTab(3);
                    setIsOpen(true);
                    break;
                case 0:
                default:
                    setIsOpen(false);
            }
        }
    };



    const renderTabs = (tab: number) => {
        const leftOffset = (tab - 1) * 60 * -1;

        const blueBoxStyle: React.CSSProperties = {
            position: 'absolute',
            top: 0,
            height: '100vh',
            transition: 'transform 0.3s ease',
            backgroundColor: '#00FFFF',
            width: '150px',
            left: `${leftOffset}px`,
            zIndex: tab * 10,
            transform: (isOpen && tab === activeTab) ? `translateX(${-150 + (60 * (tab - 1))}px)` : (isOpen) ? 'translateX(-150px)' : 'translateX(0px)',
        };

        const pinkBoxStyle: React.CSSProperties = {
            position: 'absolute',
            top: 0,
            height: '100vh',
            transition: 'transform 0.3s ease',
            backgroundColor: '#FF00FF',
            width: '50px',
            left: `${leftOffset + 150}px`,
            zIndex: tab * 10,
            transform: (isOpen && tab === activeTab)
                ? `translateX(${-150 + (60 * (tab - 1))}px)`
                : (isOpen)
                    ? 'translateX(-150px)'
                    : 'translateX(0px)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        };

        return (
            <React.Fragment key={tab}>
                <div style={blueBoxStyle}></div>
                <div style={pinkBoxStyle} onClick={() => handleClick(tab)}>{tab}</div>
            </React.Fragment>
        )

    }

    const yellowBoxStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        height: '100vh',
        transition: 'transform 0.3s ease',
        backgroundColor: '#FFFF00',
        width: 'calc(100vw - 200px)',
        right: `0px`,
        zIndex: 99,
        transform: isOpen ? 'translateX(calc((100vw - 200px)))' : 'translateX(0)',
    };

    return (
        <>
            {Array.from({ length: 3 }, (_, i) => renderTabs(i + 1))}
            <div style={yellowBoxStyle}></div>
        </>
    );
};
