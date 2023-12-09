"use client"
import React from 'react'
import { ButtonStyled } from './styled'
import { MdExpandMore } from "react-icons/md";

const Button = () => {
    return (
        <div>
            <ButtonStyled variant="outline">Button Outline<span><MdExpandMore /></span></ButtonStyled>
            <ButtonStyled variant="filled">Button Colored</ButtonStyled>
        </div>
    )
}

export default Button