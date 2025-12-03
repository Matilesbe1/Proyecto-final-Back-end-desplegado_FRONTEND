import { useEffect, useState } from "react"
import { useParams } from "react-router"
import useFetch from "./useFetch.jsx"
import { createWorkspace, getWorkspaces } from "../services/workspaceService.js"

function useWorkspace (){
    const {
        loading,
        response,
        error,
        sendRequest
    } = useFetch()

    
    const [workspace, setWorkspace] = useState([])

    async function loadWorkspaceList (){
        sendRequest(
            async () => {
                return getWorkspaces()
            }
        )
    }

    async function handlecreateWorkspace (form_state){
        sendRequest(
            async () => {
                return createWorkspace(form_state.name, form_state.url_img)
            }
        )
    }

    useEffect(
        () => {
            loadWorkspaceList()
        },
        []
    )

    return {
        loading,
        response,
        error,
        workspace,
        handlecreateWorkspace
    }
}

export default useWorkspace