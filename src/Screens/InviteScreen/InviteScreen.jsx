import React from 'react'
import InviteChannelForm from '../../Components/InviteChannelForm/InviteChannelForm'
import InviteUserForm from '../../Components/InviteUserForm/InviteUserForm'
import { createChannelByWorkspaceId } from '../../services/channelService'
import useChannels from "../../hooks/useChannels"

const InviteScreen = () => {
    const {channels, handlecreateChannel} = useChannels()
    return (
        <div>
            <InviteChannelForm onSubmit={handlecreateChannel}/>
        </div>
    )
}

export default InviteScreen
