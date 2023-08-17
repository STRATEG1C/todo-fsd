import React from 'react';
import './styles.scss';

interface BoxTitleProps {
    title: string;
}

export function BoxTitle(props: BoxTitleProps) {
    const { title } = props;

    return <h3 className="box-title">{title}</h3>;
}
