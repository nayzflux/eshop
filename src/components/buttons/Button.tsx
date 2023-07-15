"use client";

import React from 'react';

const Button = ({type, onClick, icon: Icon, label, className, disabled}: any) => {
    return (
        <button disabled={disabled} type={type} onClick={onClick}
                className={"px-6 py-3 flex gap-4 items-center justify-center rounded-lg border-2 border-neutral-300/30 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-all duration-500 ease-out  " + className}>
            <Icon className="w-6"/>
            <p className="font-semibold">{label}</p>
        </button>
    );
};

export default Button;
