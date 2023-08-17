import React, { ChangeEvent } from 'react';
import cn from 'classnames';
import './styles.scss';

interface TextInputProps {
    value: string;
    labelText?: string;
    name?: string;
    placeholder?: string;
    fullWidth?: boolean;
    onChange(value: string): void;
}

export function TextInput(props: TextInputProps) {
    const { value, labelText, name, placeholder, fullWidth, onChange } = props;

    const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
        onChange(value);
    }

    return (
        <div className="input-wrapper">
            {labelText && <label className="input-label" htmlFor={name}>{labelText}</label>}
            <input
                name={name}
                value={value}
                placeholder={placeholder}
                className={cn('input', { 'full-width': fullWidth })}
                onChange={handleChange}
            />
        </div>
    )
}
