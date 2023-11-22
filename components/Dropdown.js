import React from 'react'
import DropdownSelect from 'react-native-input-select'

export default function Dropdown({ placeholder=null, options, selectedValue, onValueChange }) {
    return (
        <DropdownSelect
            placeholder={placeholder}
            options={options}
            optionLabel={'name'}
            optionValue={'id'}
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            primaryColor={'violet'}
            dropdownStyle={{
                borderColor: 'violet',
                marginTop: 10,
            }}
            placeholderStyle={{
                color: 'gray'
            }}
        />
    )
}