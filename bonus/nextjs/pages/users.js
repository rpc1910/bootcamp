import React from 'react';
import axios from 'axios';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '~/hocs/withAnalytics';

const User = ({ users }) => (
    <div>
        <Head>
            <title>Usuários</title>
        </Head>
        <ul>
            {users.map(user => (<li key={user.id}>
                <Link href={`/users/${user.login}`}>
                    <a>{user.login}</a>
                </Link>
            </li>))}
        </ul>
        <Link href="/">
            <a>Voltar</a>
        </Link>
    </div>
);

User.getInitialProps = async () => {
    const response = await axios.get('https://api.github.com/orgs/rocketseat/members')
    return { users: response.data };
}

export default withAnalytics()(User);
