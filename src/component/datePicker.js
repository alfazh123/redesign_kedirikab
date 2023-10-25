import React, { useState } from 'react';
import Datetime from 'react-datetime';
import { AiOutlineCalendar } from 'react-icons/ai';
import 'react-datetime/css/react-datetime.css';

export default function DatePicker() {
    return (
        <div>
            <Datetime className="appearance-none border mx-2 py-2 text-gray-darker" />
        </div>
    );
}
