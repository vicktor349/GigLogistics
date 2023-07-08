import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const dashboard = () => {
    return (
        <div>Dashboard</div>

    )
}

export async function getServerSideProps(context) {
    const { req } = context;

    // Retrieve the token from the cookie
    console.log(context)
    return {
        props: {
            token: null,
        },
    };
}

export default dashboard;