import React from 'react';
import cn from 'classnames';
import './styles.scss';

interface PrimaryButtonProps {
    title: string;
    className?: string;
    onClick(): void;
}

export function PrimaryButton(props: PrimaryButtonProps) {
    const { title, className, onClick } = props;

    return (
        <div
            className={cn('primary-button', className)}
            onClick={onClick}
        >
            {title}
        </div>
    );
}
