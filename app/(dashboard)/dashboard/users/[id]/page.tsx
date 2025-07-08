import React from 'react'

function UserInfo({ params }: { params: { id: string } }) {
    const { id } = params;
    return (
        <h1 className="text-3xl">UserInfo: {id}</h1>
    )
}

export default UserInfo