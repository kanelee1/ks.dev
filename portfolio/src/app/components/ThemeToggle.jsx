"use client"

import React from 'react'
import styles from './ThemeToggle.module.css'
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { Flex, Switch } from '@radix-ui/themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

const ThemeToggle = () => {
    /**
     * TO DO:
     * Fix bug when refreshing theme on light mode doesnt save lightswitch state
     * use localStorage with the useEffect hook
     */
    const [lightSwitch, setLightSwitch] = useState(false);
    const {resolvedTheme, setTheme} = useTheme();

    // toggle state of lightSwitch
    const handleLightSwitch = () => {
        setLightSwitch(prevState => !prevState); 
        handleToggleTheme();
    };

    // toggle light and dark theme
    const handleToggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <Flex className={styles.lightSwitch} gap="2">
            <Switch color='blue'  onClick={() => handleLightSwitch()} />
            {lightSwitch ? <SunIcon /> : <MoonIcon />}
        </Flex>
    )
}

export default ThemeToggle