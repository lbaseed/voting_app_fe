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

export const GET_COUNTRIES = gql`
    ${CORE_COUNTRY_FIELDS}
    ${CORE_STATE_FIELDS}
    query {
        allCountries {
            ...coreCountryFields
            states {
                ...coreStateFields
            }
        }
    }
`;

export const GET_COUNTRY = gql`
    ${CORE_COUNTRY_FIELDS}
    ${CORE_STATE_FIELDS}
    query getCountry($country_uuid: ID!) {
        getCountry(uuid: $country_uuid) {
            ...coreCountryFields
            states {
                ...coreStateFields
            }
        }
    }
`;

export const GET_STATES = gql`
    ${CORE_STATE_FIELDS}
    ${CORE_LGA_FIELDS}
    query getAllStates($country_id: ID!){
        allStates(country_id: $country_id) {
            ...coreStateFields
            lgas {
                ...coreLgaFields
            }
        }
    }
`

export const GET_STATE = gql`
    ${CORE_STATE_FIELDS}
    ${CORE_LGA_FIELDS}
    query getAllStates($state_uuid: ID!){
        getState(uuid: $state_uuid) {
            ...coreStateFields
            lgas {
                ...coreLgaFields
            }
        }
    }
`

export const GET_LGAS = gql`
    ${CORE_LGA_FIELDS}
    ${CORE_WARD_FIELDS}
    ${CORE_POLLING_UNIT_FIELDS}
    query getAllLgas($state_id: ID!){
        allLgas(state_id: $state_id) {
            ...coreLgaFields
            wards {
                ...coreWardFields
                pollingUnits {
                    ...corePollingUnitFields
                    inec_ref
                    registered_voters
                }
            }
        }
    }
`

export const GET_LGA = gql`
    ${CORE_LGA_FIELDS}
    ${CORE_WARD_FIELDS}
    query getLga($lga_uuid: ID!){
        getLga(uuid: $lga_uuid) {
            ...coreLgaFields
            wards {
                ...coreWardFields
                pollingUnits {
                    inec_ref
                    registered_voters
                    ...corePollingUnitFields
                }
            }
        }
    }
`

export const GET_WARDS = gql`
    ${CORE_WARD_FIELDS}
    ${CORE_POLLING_UNIT_FIELDS}
    query getAllWards($lga_id: ID){
        allWards(lga_id: $lga_id){
            ...coreWardFields
            pollingUnits {
                inec_ref
                registered_voters
                ...corePollingUnitFields
            }
        }
    }
`

export const GET_WARD = gql`
    ${CORE_WARD_FIELDS}
    ${CORE_POLLING_UNIT_FIELDS}
    query getWard($ward_uuid: ID!){
       getWard(uuid: $ward_uuid){
            ...coreWardFields
            pollingUnits {
                inec_ref
                registered_voters
                ...corePollingUnitFields
            }
        }
    }
`

export const GET_POLITICAL_PARTIES = gql`
    ${CORE_POLITICAL_PARTY_FIELDS}
    query getPoliticalParties {
        allPoliticalParties {
        ...corePoliticalPartyFields
        }
    }
`

export const GET_POLITICAL_PARTY = gql`
    ${CORE_POLITICAL_PARTY_FIELDS}
    query getPoliticalParty($party_uuid: ID!) {
        getPoliticalParty(uuid: $party_uuid) {
        ...corePoliticalPartyFields
        }
    }
`

export const GET_ELECTIONS = gql`
    ${CORE_ELECTION_FIELDS}
    ${CORE_ELECTION_DETAIL_FIELDS}
    query getAllElections {
        allElections {
            ...coreElectionFields
            electionDetails{
            ...coreElectionDetailFields
            }
        }
    }
`

export const GET_ELECTION = gql`
    ${CORE_ELECTION_FIELDS}
    ${CORE_ELECTION_DETAIL_FIELDS}
    query getElection($election_uuid: ID!) {
        getElection(uuid: $election_uuid) {
            ...coreElectionFields
            electionDetails{
            ...coreElectionDetailFields
                candidate {
                    first_name
                    last_name
                    photo
                }
            }
        }
    }
`

export const GET_ELECTION_STAT = gql`
    query gqlGetElectionStat($uuid: ID){
        getElection(uuid: $uuid) {
            electionDetails {
                politicalParty {
                    id
                    name
                    electionDetail {
                        total_votes
                    }
                }
            }
        }
    }
`

export const GET_POLLING_UNITS = gql`
    ${CORE_POLLING_UNIT_FIELDS}
    ${CORE_PAGINATOR_INFO}
    query getAllPollingUnits($wardId: ID! $first: Int = 25 $page: Int = 1) {
        allPollingUnits(ward_id: $wardId first: $first page: $page){
            data {
                inec_ref
                registered_voters
                ...corePollingUnitFields
            }
            paginatorInfo {
                ...corePaginatorInfoFields
            }
        }
    }
`

export const GET_POLLING_UNIT = gql`
    ${CORE_POLLING_UNIT_FIELDS}
    ${CORE_WARD_FIELDS}
    ${CORE_VOTE_COUNT_FIELDS}
    query getPollingUnit($uuid: ID!) {
        getPollingUnit(uuid: $uuid) {
            inec_ref
            registered_voters
            ...corePollingUnitFields
            ward {
            ...coreWardFields
            }
            voteCount {
                ...coreVoteCountFields
            }
            inec_ref
            registered_voters
        }
    }
`

export const GET_CANDIDATES = gql`
    ${CORE_CANDIDATE_FIELDS}
    query getAllCandidates {
        allCandidates {
            ...coreCandidateFields
        }
    }
`

export const GET_CANDIDATE = gql`
    ${CORE_CANDIDATE_FIELDS}
    query getCandidate($candidate_uuid: ID!) {
        getCandidate(uuid: $candidate_uuid) {
            ...coreCandidateFields
        }
    }
`

export const GET_VOTINGS = gql`
    ${CORE_VOTING_FIELDS}
    ${CORE_VOTE_COUNT_FIELDS}
    ${CORE_AGENT_FIELDS}
    ${CORE_PAGINATOR_INFO}
    query getAllVotings($first: Int = 25 $page: Int = 1 ) {
        allVotings(first: $first page: $page) {
            data {
                ...coreVotingFields
                voteCounts {
                    ...coreVoteCountFields
                }
            }
            paginatorInfo {
                ...corePaginatorInfoFields
            }
        }
    }
`

export const GET_VOTING = gql`
    ${CORE_VOTING_FIELDS}
    ${CORE_VOTE_COUNT_FIELDS}
    ${CORE_ELECTION_FIELDS}
    ${CORE_POLLING_UNIT_FIELDS}
    query getVoting($voting_uuid: ID!) {
        getVoting(uuid: $voting_uuid) {
            ...coreVotingFields
            voteCounts {
                ...coreVoteCountFields
            }
            user {
                ...coreAgentFields
            }
            election {
                ...coreElectionFields
            }
            pollingUnit {
                ...corePollingUnitFields
            }
        }
    }
`

export const GET_AGENTS = gql`
    ${CORE_AGENT_FIELDS}
    ${CORE_PAGINATOR_INFO}
    query getAllAgents($first: Int = 25 $page: Int = 1) {
        allAgents(first: $first page: $page) {
            data {
                ...coreAgentFields
            }
            paginatorInfo {
                ...corePaginatorInfoFields
            }
        }
    }
`

export const GET_AGENT = gql`
    ${CORE_AGENT_FIELDS}
    query getAgent($agent_uuid: ID!){
        getAgent(uuid: $agent_uuid){
            ...coreAgentFields
        }
    }
`

export const GET_POLLING_UNIT_STAT = gql`
    query gqlPollingUnitStat {
        getTotalRegisteredVoters {
            totalPollingUnits
            totalVoters
        }
    }
`