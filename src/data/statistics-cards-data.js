import { GET_ELECTION_STAT, GET_POLLING_UNITS, GET_POLLING_UNIT_STAT } from "@/gql/queries";
import Spinner from "@/widgets/layout/loading";
import { useQuery } from "@apollo/client";
import {
  BanknotesIcon,
  UserPlusIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

export const useStatisticsCardsData = (setLoader) => {
  const [intervalCount, setIntervalCount] = useState(0);
  // const loader = Spinner()
  
  // if(!voteStat.loading) setLoader(false)
  const [totalVotesCasted, setTotalVotesCasted] = useState(0)
  const [apcVotes, setApcVotes] = useState(0)
  const [pdpVotes, setPdpVotes] = useState(0)
  const [sdpVotes, setSdpVotes] = useState(0)
  const [nnppVotes, setNnppVotes] = useState(0)
  const [totalRegisteredVoters, setTotalRegisteredVoters] = useState(0)
  const [totalPollingUnits, setTotalPollingUnits] = useState(0)
  
  const voteStat = useQuery(GET_ELECTION_STAT, {variables: {uuid : "8f0a5798-ef34-413b-9ab0-9583456b59c6" }} )

  const pollingUnits = useQuery(GET_POLLING_UNIT_STAT)

  useEffect(() => {
    
    setApcVotes(voteStat?.data?.getElection?.electionDetails?.[0]?.politicalParty?.electionDetail?.total_votes)
    setPdpVotes(voteStat?.data?.getElection?.electionDetails?.[1]?.politicalParty?.electionDetail?.total_votes)
    setSdpVotes(voteStat?.data?.getElection?.electionDetails?.[2]?.politicalParty?.electionDetail?.total_votes)
    setNnppVotes(voteStat?.data?.getElection?.electionDetails?.[3]?.politicalParty?.electionDetail?.total_votes)
   
      setTotalVotesCasted(
        voteStat?.data?.getElection?.electionDetails?.[0]?.politicalParty?.electionDetail?.total_votes + 
        voteStat?.data?.getElection?.electionDetails?.[1]?.politicalParty?.electionDetail?.total_votes +
        voteStat?.data?.getElection?.electionDetails?.[2]?.politicalParty?.electionDetail?.total_votes +
        voteStat?.data?.getElection?.electionDetails?.[3]?.politicalParty?.electionDetail?.total_votes
        )
    setTotalRegisteredVoters(pollingUnits?.data?.getTotalRegisteredVoters?.totalVoters)
    setTotalPollingUnits(pollingUnits?.data?.getTotalRegisteredVoters?.totalPollingUnits)

  }, [voteStat, pollingUnits])
  

  return ([
    {
      color: "blue",
      icon: BanknotesIcon,
      title: "Total Votes Casted",
      value:  parseInt(totalVotesCasted).toLocaleString(),
      footer: {
        color: "text-green-500",
        value:  ((totalVotesCasted / totalRegisteredVoters) * 100).toFixed(2) + " %" ,
        label: "of votes REgistered Voters",
      },
    },
    {
      color: "green",
      icon: UserPlusIcon,
      title: "Total Registered Voters",
      value:  parseInt(totalRegisteredVoters).toLocaleString(),
      footer: {
        color: "text-red-500",
        value: "",
        label: `Bauchi North [Polling Units: ${parseInt(totalPollingUnits).toLocaleString()} ]`,
      },
    },
    {
      color: "green",
      icon: ChartBarIcon,
      title: "All Progressives Congress Votes",
      value: parseInt(apcVotes).toLocaleString(),
      footer: {
        color: "text-green-500",
        value: ((apcVotes / totalVotesCasted) * 100).toFixed(2) + " %" ,
        label: "of Casted Votes",
      },
    },
    {
        color: "pink",
        icon: ChartBarIcon,
        title: "Peoples Democratic Party",
        value: parseInt(pdpVotes).toLocaleString(),
        footer: {
          color: "text-green-500",
          value: ((pdpVotes / totalVotesCasted) * 100).toFixed(2) + " %" ,
          label: "of Casted Votes",
        },
    },
    {
      color: "pink",
      icon: ChartBarIcon,
      title: "Social Democratic Party Votes",
      value: parseInt(sdpVotes).toLocaleString(),
      footer: {
        color: "text-green-500",
        value: ((sdpVotes / totalVotesCasted) * 100).toFixed(2) + " %" ,
        label: "of Casted Votes",
      },
    },
    {
      color: "pink",
      icon: ChartBarIcon,
      title: "New Nigeria People Party Votes",
      value: parseInt(nnppVotes).toLocaleString(),
      footer: {
        color: "text-green-500",
        value: ((nnppVotes / totalVotesCasted) * 100).toFixed(2) + " %" ,
        label: "of Casted Votes",
      },
    }
  ])
};

export default useStatisticsCardsData;
