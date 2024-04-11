import { useState } from "react"
import { MenuStyles } from "./MenuStyles"
import styled from 'styled-components'

const Menu = () => {
     
    return (
        <MenuStyles className="menu-tyles">
            <div className="gatos">Gatos</div>
            <div>Cães</div>
        </MenuStyles>
    )
}

export default Menu

export const MenuStyles2 = styled.div`
    display: flex;
    justify-content: space-around;
`;
