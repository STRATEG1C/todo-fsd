import React, { PropsWithChildren } from 'react';
import cn from 'classnames';
import './styles.scss';

interface CardProps extends PropsWithChildren {
    text: string;
    className?: string;
}

export function Card(props: CardProps) {
    const { text, className, children } = props;

    return (
        <div className={cn('card', className)}>
            {text}
            {children}
        </div>
    )
}
