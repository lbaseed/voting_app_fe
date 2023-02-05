import { GET_COUNTRIES, GET_POLLING_UNITS, GET_STATES } from "@/gql/queries"
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
    states_data : data, 
    states_error : error, 
    states_loading : loading 
  }
}

export const useGetPollingUnits = (variables) => {

  const { data, error, loading } = useQuery(GET_POLLING_UNITS, {
    variables
  })
  return { 
    data, error, loading 
  }
}


