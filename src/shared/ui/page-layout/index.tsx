import React, { PropsWithChildren } from 'react';
import cn from 'classnames';
import { PageTitle } from '../typography/page-title';
import './styles.scss';

interface PageLayoutProps extends PropsWithChildren {
    title?: string;
    className?: string;
}

export function PageLayout(props: PageLayoutProps) {
    const { title = '', className = '', children } = props;

    return (
        <div className={cn('page-container', className)}>
            <PageTitle title={title} />
            {children}
        </div>
    );
}
