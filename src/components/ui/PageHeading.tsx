import React from 'react';

const PageHeading = ({children}: any) => {
    return (
        <h1 className="pb-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold">{children}</h1>
    );
};

export default PageHeading;
