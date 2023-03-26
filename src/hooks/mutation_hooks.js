import { CREATE_VOTE_COUNT, CREATE_VOTING, UPDATE_VOTING } from "@/gql/mutations"
import { useMutation } from "@apollo/client"


export const useCreateVoting = async () => {
    const [createVotingOptions, {data, error, loading}] = await useMutation(CREATE_VOTING)

      // const doCreateVoting = ()
  return [
    createVotingOptions, {data, error, loading}
  ]
}

export const useUpdateVoting = async (variables) => {
  const { data, error, loading } = await useMutation(UPDATE_VOTING, {
    variables
  })
  return { 
    data, 
    error, 
    loading 
  }
}

export const useCreateVoteCount = async (variables) => {
  const {data, error, loading} =  await useMutation(CREATE_VOTE_COUNT, {variables})

  return {data, error, loading}
}



