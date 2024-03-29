"use client"

import { CustomButtonProps } from "@/types"
import React from "react"

const CustomButton = ({ title, containerStyles, handleClick } : CustomButtonProps) => {

    return (
        <button
            disabled={false}
            type={'button'}
            className={`custom-button ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={'flex-1'}>
                {title}
            </span>
        </button>
    )
}

export default CustomButton