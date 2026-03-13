import React, { memo, Suspense } from 'react';

import Box from '../../components/Box';
import Spinner from '../../components/Spinner';
import logo from '../../logo.svg';

import Counter from './Counter';
import DocList from './DocList';
import styles from './index.module.css';

import App from '../../app/App';

interface Props {}

const Index: React.FC<Props> = memo(() => {
    return (
        <>
            <App />
        </>
    );
});
Index.displayName = 'Index';

export default Index;
