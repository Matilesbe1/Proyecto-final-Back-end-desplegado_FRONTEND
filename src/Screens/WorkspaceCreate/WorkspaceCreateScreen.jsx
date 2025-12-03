import React from 'react'
import CreateWorkspace from '../../Components/CreateWorkspaceForm/CreateWorkspaceForm.jsx'
import useWorkspace from '../../hooks/useWorkspace.jsx'

const WorkspaceCreateScreen = () => {
    const {workspaces, handlecreateWorkspace} = useWorkspace()
    return (
        
        <div>
            <CreateWorkspace onSubmit={handlecreateWorkspace}/>
        </div>
    )
}

export default WorkspaceCreateScreen