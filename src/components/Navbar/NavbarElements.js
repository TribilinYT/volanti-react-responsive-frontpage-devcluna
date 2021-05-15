import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

const variable = {
    //text Size Variables
    h1Size: "1.5em",

}

const {
    h1Size,

} = variable

export const Nav = styled.nav`
    background: ${({scrollNav})=>(scrollNav ? '#000000': 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        /* transition: 0.8s all escape; */
    }
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px; 
`

export const NavLogo = styled(LinkR)`
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    font-size: ${h1Size};
    
    &:hover{
        color: #FF9900;
        transition: 0.5s ease-in-out;
    }
    
`

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px){
        display: block;
        cursor: pointer;
        color: #ffffff;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.8rem;
        transform: translate(-100%, 60%);
        &:active{
            color: #FF9900;
        }
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin: 0;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #ffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    
    &:hover{
        border-bottom: 3px solid #FF9900;
        color: #FF9900;
    }

    &:active{
        border-bottom: 3px solid #FF9900;
        color: #FF9900;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
       
    }
`

export const NavBtnLink = styled(LinkS)`
    background: #FF9900;
    border-radius: 50px;
    padding: 10px 22px;
    cursor: pointer;
    transition: 0.5s ease-in-out;

    &:hover{
        background: #ffffff;
       
    }
`