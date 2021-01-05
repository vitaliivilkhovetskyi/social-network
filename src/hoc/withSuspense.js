import React from 'react';
import Prealoader from "../components/common/Prealoader/Prealoader";

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Prealoader />}>
            <Component {...props} />
        </React.Suspense>
    };
}