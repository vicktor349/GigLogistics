import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import axios from 'axios'

const useAuthentication = (details) => {
    const router = useRouter()
    useEffect(() => {
        async function fetchData() {
            await axios({
                method: 'POST',
                url: 'http://localhost:3001/api/auth/signin',
                data: details,
                headers: { 'Content-Type': 'application/json' }
            }).then(response => {
                const token = response.data.token
                if (!token) {
                    router.push('/signin')
                }
            })
        }
        fetchData()
    }, [details, router])
}

export default useAuthentication