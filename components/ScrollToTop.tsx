import React, { useEffect } from "react";
import { useRouter } from 'next/router'

interface RouterState {
    pathname: string;
}

const ScrollToTop: React.FC = () => {
   let {pathname} = useRouter<RouterState>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;
