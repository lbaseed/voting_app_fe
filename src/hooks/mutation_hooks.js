import { CREATE_VOTING, UPDATE_VOTING } from "@/gql/mutations"
import { useMutation } from "@apollo/client"


export const useCreateVoting = (variables) => {
    const {data, error, loading} = useMutation(CREATE_VOTING, {
      variables
    })
  return { 
    data, 
    error, 
    loading
    }
}

export const useUpdateVoting = (variables) => {
  const { data, error, loading } = useMutation(UPDATE_VOTING, {
    variables
  })
  return { 
    data, 
    error, 
    loading 
  }
}



