import React from 'react'

function UserInfo({ params }: { params: { id: string } }) {
    const { id } = params;
    return (
        <div>UserInfo: {id}</div>
    )
}

export default UserInfo