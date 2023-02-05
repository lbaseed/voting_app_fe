import { gql } from "@apollo/client"
import { 
    CORE_AGENT_FIELDS,
    CORE_CANDIDATE_FIELDS,
    CORE_COUNTRY_FIELDS,
    CORE_ELECTION_DETAIL_FIELDS,
    CORE_ELECTION_FIELDS,
    CORE_LGA_FIELDS,
    CORE_PAGINATOR_INFO,
    CORE_POLITICAL_PARTY_FIELDS,
    CORE_POLLING_UNIT_FIELDS,
    CORE_STATE_FIELDS,
    CORE_VOTE_COUNT_FIELDS,
    CORE_VOTING_FIELDS,
    CORE_WARD_FIELDS 
} from "../fragments";


export const CREATE_VOTING = gql`
    ${CORE_VOTING_FIELDS}
    ${CORE_VOTE_COUNT_FIELDS}
    mutation gcreateVoting(
        $election_id: ID!
        $polling_unit_id: Int
        $registered_voters: Int
        $accredited_voters: Int
        $votes_casted: Int
        $valid_votes: Int
        $ivalid_votes: Int
        $date: DateTime
     ) {
        allVotings(
            election_id: $election_id
            polling_unit_id: $polling_unit_id
            registered_voters: $registered_voters
            accredited_voters: $accredited_voters
            votes_casted: $votes_casted
            valid_votes: $valid_votes
            ivalid_votes: $ivalid_votes
            date: $date
        ) {
                ...coreVotingFields
                voteCounts {
                    ...coreVoteCountFields
                }
           
        }
    }
`

export const UPDATE_VOTING = gql`
    ${CORE_VOTING_FIELDS}
    ${CORE_VOTE_COUNT_FIELDS}
    mutation gcreateVoting(
        $id: ID!
        $uuid: ID!
        $election_id: ID
        $polling_unit_id: Int
        $registered_voters: Int
        $accredited_voters: Int
        $votes_casted: Int
        $valid_votes: Int
        $ivalid_votes: Int
        $date: DateTime
     ) {
        allVotings(
            id: $id
            uuid: $uuid
            election_id: $election_id
            polling_unit_id: $polling_unit_id
            registered_voters: $registered_voters
            accredited_voters: $accredited_voters
            votes_casted: $votes_casted
            valid_votes: $valid_votes
            ivalid_votes: $ivalid_votes
            date: $date
        ) {
            ...coreVotingFields
            voteCounts {
                ...coreVoteCountFields
            }
           
        }
    }
`

export const CREATE_AGENT = gql`
    ${CORE_AGENT_FIELDS}
    ${CORE_PAGINATOR_INFO}
    mutation createAgent(
        
    ) {
        createAgent(
        
        ) {
            ...coreAgentFields
        }
    }
`

export const UPDATE_AGENT = gql`
    ${CORE_AGENT_FIELDS}
    query getAgent($agent_uuid: ID!){
        updateAgent(uuid: $agent_uuid){
            ...coreAgentFields
        }
    }
`