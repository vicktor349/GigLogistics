import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import withAuth from '@/components/useAuthentication'

const dashboard = () => {

    return (
        <div>Dashboard</div>

    )
}
export default withAuth(dashboard);