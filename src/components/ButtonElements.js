import styled from 'styled-components';
import {Link} from 'react-scroll';


export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary})=>(primary ? '#FF9900' : '#010606')};
    white-space: nowrap;
    padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
    color: ${({dark})=>(dark ? '#010606': '#ffff')};
    font-size: ${({fontBig})=> (fontBig ? '20px': '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({primary})=>(primary ? '#ffff' :'#FF9900')}
    }
`;
