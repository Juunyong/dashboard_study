import React, { createContext } from 'react';

const UserContext = createContext();

const User = () => {
    const userData = {
        name: '준',
        email: 'z@mail.com',
        age: '20',
        address: '용인',
    };
    return <UserContext.Provider value={userData} />;
};

const UserProfile = () => {
    return (
        <div>
            <dl>
                <dt>이름</dt>
                <dd>{userData.name}</dd>
            </dl>
            <dl>
                <dt>이메일</dt>
                <dd>{userData.email}</dd>
            </dl>
            <dl>
                <dd>나이</dd>
                <dt>{userData.age}</dt>
            </dl>
            <dl>
                <dd>주거지</dd>
                <dt>{userData.address}</dt>
            </dl>
        </div>
    );
};

export default User;
