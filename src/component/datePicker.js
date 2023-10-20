import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

export default function DatePicker() {
    return (
        <div>
            <Datetime className="appearance-none shadow border rounded-md py-3 px-2 text-gray-darker w-full" />
        </div>
    );
}
