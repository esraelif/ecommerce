import SearchIcon from '@mui/icons-material/Search';
import { Badge, MenuItem } from '@mui/material';
import React from 'react';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
    return (

        <div className='container' style={{ height: "60px", background: "gray", height: "85px" }}>
            <div className="wrapper" style={{ padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="left" style={{ flex: 1, display: "flex", alignItems: "center", marginTop: "10px" }}>
                    <div className="language" style={{ display: "flex" }}> EN
                        <div className="search" style={{ display: "flex", alignItems: "center", border: "0.5px solid lightgray", marginLeft: "15px", padding: "5px", height: "20px" }}>
                            <input type="text" style={{ border: "none", height: "15px" }} />
                            <SearchIcon style={{ color: "black", fontSize: "36px" }} />
                        </div>
                    </div>

                </div>
                <div className="center" style={{ flex: 1, textAlign: "center" }}>
                    <p style={{ fontSize: "32px", color: "blue" }}>Let's SHOPPING</p>

                </div>
                <div className="right" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <div style={{ marginRight: "10px" }}>REGISTER</div>
                    <div>SIGN IN</div>
                    <MenuItem style={{ fontSize: "14px", marginLeft: "125px" }} />
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined color="action" />
                    </Badge>
                </div>
            </div>

        </div>

    );
}

export default Navbar;
