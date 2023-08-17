import React from 'react';
import './styles.scss';

interface MainTitleProps {
    title: string;
}

export function PageTitle(props: MainTitleProps) {
    const { title } = props;

    return <h1 className="page-title">{title}</h1>;
}
