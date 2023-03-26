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
    mutation qglCreateVoting(
        $election_id: ID!
        $polling_unit_id: ID!
        $registered_voters: String  
        $accredited_voters: String  
        $votes_casted: String     
        $valid_votes: String    
        $invalid_votes: String   
        $date: DateTime
     ) {
        createVoting(
            election_id: $election_id
            polling_unit_id: $polling_unit_id
            registered_voters: $registered_voters
            accredited_voters: $accredited_voters
            votes_casted: $votes_casted
            valid_votes: $valid_votes
            invalid_votes: $invalid_votes
            date: $date
        ) {
                ...coreVotingFields
           
        }
    }
`

export const UPDATE_VOTING = gql`
    ${CORE_VOTING_FIELDS}
    ${CORE_VOTE_COUNT_FIELDS}
    mutation updateVoting(
        $id: ID!
        $uuid: ID!
        $election_id: ID
        $polling_unit_id: ID
        $registered_voters: String
        $accredited_voters: String
        $votes_casted: String
        $valid_votes: String
        $invalid_votes: String
        $date: DateTime
     ) {
        updateVoting(
            id: $id
            uuid: $uuid
            registered_voters: $registered_voters
            accredited_voters: $accredited_voters
            votes_casted: $votes_casted
            valid_votes: $valid_votes
            invalid_votes: $ivalid_votes
            date: $date
        ) {
            ...coreVotingFields
            voteCounts {
                ...coreVoteCountFields
            }
           
        }
    }
`

// export const CREATE_AGENT = gql`
//     ${CORE_AGENT_FIELDS}
//     ${CORE_PAGINATOR_INFO}
//     mutation createAgent(
        
//     ) {
//         createAgent(
        
//         ) {
//             ...coreAgentFields
//         }
//     }
// `

// export const UPDATE_AGENT = gql`
//     ${CORE_AGENT_FIELDS}
//     mutation updateAgent($agent_uuid: ID!){
//         updateAgent(uuid: $agent_uuid){
//             ...coreAgentFields
//         }
//     }
// `

export const CREATE_VOTE_COUNT = gql`
    ${CORE_VOTE_COUNT_FIELDS}
    mutation createVoteCount(
        $election_id: ID!
        $voting_id: ID!
        $polling_unit_id: ID!
        $political_party_id: ID!
        $votes: String!
    ){
        createVoteCount(
            election_id: $election_id
            voting_id: $voting_id
            polling_unit_id: $polling_unit_id
            political_party_id: $political_party_id
            votes: $votes
        ) {
            ...coreVoteCountFields
        }
    }
`

export const CREATE_VOTING_VOTE_COUNT = gql`
    ${CORE_VOTE_COUNT_FIELDS}
    ${CORE_VOTING_FIELDS}
    mutation createVotingVoteCount(
        $election_id: ID!
        $polling_unit_id: ID!
        $registered_voters: String  
        $accredited_voters: String  
        $votes_casted: String     
        $valid_votes: String    
        $invalid_votes: String   
        $date: DateTime
        $vote_counts: [VoteCountInput]
     ) {
        createVoting(
            election_id: $election_id
            polling_unit_id: $polling_unit_id
            registered_voters: $registered_voters
            accredited_voters: $accredited_voters
            votes_casted: $votes_casted
            valid_votes: $valid_votes
            invalid_votes: $invalid_votes
            date: $date
            vote_counts: $vote_counts
        ) {
            ...coreVotingFields
            voteCounts {
                ...coreVoteCountFields
            }
           
        }
    }

`