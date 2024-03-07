import React from 'react'
import { Contacts, CreditCard, LockReset } from "@mui/icons-material";
import { Box, Grid, List, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname();
    const [selectedIndex, setSelectedIndex] = React.useState(pathname);
    const router = useRouter();

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        href: string,
    ) => {
        setSelectedIndex(href);
        router.push(href)
    };
    return (
    <Paper>
        <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
            selected={selectedIndex === "/user/profile"}
            onClick={(event) => handleListItemClick(event,"/user/profile")}
            >
            <ListItemIcon>
                <CreditCard />
            </ListItemIcon>
            <ListItemText primary="Thông Tin Cá Nhân" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === "/user/address"}
                onClick={(event) => handleListItemClick(event,"/user/address")}
                >
                <ListItemIcon>
                    <Contacts />
                </ListItemIcon>
                <ListItemText primary="Địa Chỉ" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === "/user/change_password"}
                onClick={(event) => handleListItemClick(event,"/user/change_password")}
                >
                <ListItemIcon>
                    <LockReset />
                </ListItemIcon>
                <ListItemText primary="Đổi Mật Khẩu" />
            </ListItemButton>
        </List>
    </Paper>
  )
}
