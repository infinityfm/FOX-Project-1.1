import React from 'react'
import { CHeaderNavLink, CSidebarNavLink } from '@coreui/react'

const FoxHeaderNavLink = (props) => {
    return (
        <CHeaderNavLink {...props} >{props.linktext}</CHeaderNavLink>
    )
}

export { FoxHeaderNavLink }

const FoxSidebarNavLink = (props) => {
    return (
        <CSidebarNavLink {...props} >{props.linktext}</CSidebarNavLink>
    )
}

export { FoxSidebarNavLink }