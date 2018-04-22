import React from 'react';
import Form from '../../components/Form';

export default ({requestLogin}) => <Form onSubmit={(fields => requestLogin(fields))}/>;
