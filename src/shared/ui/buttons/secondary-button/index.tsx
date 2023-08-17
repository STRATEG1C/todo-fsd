import React from 'react';
import cn from 'classnames';
import './styles.scss';

interface SecondaryButtonProps {
    title: string;
    className?: string;
    onClick(): void;
}

export function SecondaryButton(props: SecondaryButtonProps) {
    const { title, className, onClick } = props;

    return (
        <div
            className={cn('secondary-button', className)}
            onClick={onClick}
        >
            {title}
        </div>
    );
}
