import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Button(props) {

    const { type, href, className, style, target, children, isExternal } = props 

    const onClick = () => {
        if ( props.onClick ) props.onClick()
    }

    if ( type === "link" ){

        if ( isExternal ){
            return (
                <a 
                    href={href}
                    className={className}
                    style={style}
                    target={target}
                >
                    {children}
                </a>
            )
        }

        return (
            <NavLink
                to={href}
                className={className}
                style={style}
                onClick={onClick}
            >
                {children}
            </NavLink>
        )

    }

    return (
        <button
            type={type}
            className={className}
            style={style}
            onClick={onClick}
        >
            {children}    
        </button>
    )
}

Button.PropTypes = {
    type : PropTypes.oneOf(["link", "button", "submit", "reset"]).isRequired,
    href : PropTypes.string,
    onClick : PropTypes.func,
    className : PropTypes.string,
    style : PropTypes.string,
    target : PropTypes.string,
    isExternal : PropTypes.bool
}
