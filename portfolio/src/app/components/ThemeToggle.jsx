"use client"

import React from 'react'
import styles from './ThemeToggle.module.css'
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Flex, Switch } from '@radix-ui/themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

/**
 * Toggles Theme componenet between light and dark mode
 * Toggles light switch icon between Sun and Moon icon
 * Saves current theme in local storage in case of page refresh
 */
const ThemeToggle = () => {
    const [lightSwitch, setLightSwitch] = useState(false);
    const {resolvedTheme, setTheme} = useTheme();

    // set initial state of theme based on localStorage
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            // if storedTheme !null, set that as current theme/set light switch
            setTheme(storedTheme);
            setLightSwitch(storedTheme === 'light');    // sets lightswitch to true if default theme is 'light', false otherwise
        } else {
            // if no theme stored, set 'dark' to default
            const defaultTheme = 'dark';
            setTheme(defaultTheme);
            setLightSwitch(false); 
        }
    }, [resolvedTheme, setTheme])

    // toggle state of lightSwitch
    const handleLightSwitch = () => {
        const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);    // store new theme into local storage
        setLightSwitch(prevState => !prevState);    // update switch state
    };

    return (
        <Flex className={styles.lightSwitch} gap="2">
            <Switch color='blue' onClick={handleLightSwitch} checked={lightSwitch} />
            {lightSwitch ? <SunIcon /> : <MoonIcon />}
        </Flex>
    )
}

export default ThemeToggle