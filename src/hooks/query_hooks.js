import { GET_COUNTRIES, GET_ELECTION, GET_ELECTIONS, GET_LGAS, GET_POLITICAL_PARTIES, GET_POLLING_UNITS, GET_STATES, GET_VOTINGS, GET_WARDS } from "@/gql/queries"
import { useQuery } from "@apollo/client"


export const useGetCountries = () => {

    const {data, error, loading} = useQuery(GET_COUNTRIES)

  return { 
    data, error, loading
    }
}

export const useGetStates = (variables) => {

  const { data, error, loading } = useQuery(GET_STATES, {
    variables
  })
  return { 
    data : data, 
    error : error, 
    loading : loading 
  }
}

export const useGetLgas = (variables) => {

  const { data, error, loading } = useQuery(GET_LGAS, {
    variables
  })
  return { 
    data : data, 
    error : error, 
    loading : loading 
  }
}

export const useGetWards = (variables) => {

  const { data, error, loading } = useQuery(GET_WARDS, {
    variables
  })
  return { 
    data : data, 
    error : error, 
    loading : loading 
  }
}

export const useGetVotings = (variables) => {

  const { data, error, loading } = useQuery(GET_VOTINGS, {
    variables
  })
  return { 
    data : data, 
    error : error, 
    loading : loading 
  }
}

// export const useGetVoteCount = () => {
//   const {data, error, loading} = useQuery()
// }

export const useGetPollingUnits = (variables) => {
  const { data, error, loading } = useQuery(GET_POLLING_UNITS, {
    variables
  })
  return { 
    data, error, loading 
  }
}

export const useGetParties = () => {
  const {data, error, loading} = useQuery(GET_POLITICAL_PARTIES)
  return {data, error, loading} 
}

export const useGetElections = () => {
  const {data, error, loading} = useQuery(GET_ELECTIONS)
  return {data, error, loading}
}

export const useGetElection = (variables) => {
  const {data, error, loading} = useQuery(GET_ELECTION, { variables })
  return {data, error, loading}
}

