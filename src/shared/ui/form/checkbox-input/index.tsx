import React from 'react';
import cn from 'classnames';
import './styles.scss';

interface CheckboxInputProps {
    value: boolean;
    className?: string;
    onChange(value: boolean): void;
}

export function CheckboxInput(props: CheckboxInputProps) {
    const { value, className, onChange } = props;

    const onChangeHandler = (): void => {
        onChange(!value);
    };

    return (
        <input
            type="checkbox"
            className={cn('checkbox', className)}
            checked={value}
            onChange={onChangeHandler}
        />
    );
}
