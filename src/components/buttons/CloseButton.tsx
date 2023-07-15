"use client";

import React from 'react';
import Button from "@/components/buttons/Button";
import {XMarkIcon} from "@heroicons/react/24/solid";

const CloseButton = ({onClick}: any) => {
    return (
        <button type="button" onClick={onClick}
                className="bg-neutral-100 hover:bg-neutral-50 rounded-full p-1 transition-all duration-500 ease-out">
            <XMarkIcon className="w-4"/>
        </button>
    );
};

export default CloseButton;
