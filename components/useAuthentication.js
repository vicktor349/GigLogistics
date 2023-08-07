import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent) => {
    const AuthComponent = (props) => {
        const router = useRouter();

        useEffect(() => {
            const token = localStorage.getItem('jwtToken')
            if (!token) {
                router.push('/signin');
            }
        }, []);

        return <WrappedComponent {...props} />;
    };

    return AuthComponent;
};

export default withAuth;
