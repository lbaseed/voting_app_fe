import { gql } from "@apollo/client";

export const CORE_COUNTRY_FIELDS = gql`
    fragment coreCountryFields on Country {
        id,
        uuid,
        name
    }
`

export const CORE_STATE_FIELDS = gql`
    fragment coreStateFields on State {
        id,
        uuid,
        name
    }
`

export const CORE_LGA_FIELDS = gql`
    fragment coreLgaFields on Lga {
        id,
        uuid,
        name
    }
`

export const CORE_WARD_FIELDS = gql`
    fragment coreWardFields on Ward {
        id,
        uuid,
        name
    }
`

export const CORE_ELECTION_FIELDS = gql`
    fragment coreElectionFields on Election {
        id,
        uuid,
        name,
        active,
        year,
        type,
    }
`

export const CORE_ELECTION_DETAIL_FIELDS = gql`
    fragment coreElectionDetailFields on ElectionDetail {
        id,
        uuid,
        total_votes,
        position,
        winner,
        zone,
        description
    }
`

export const CORE_POLITICAL_PARTY_FIELDS = gql`
    fragment corePoliticalPartyFields on PoliticalParty {
        id,
        uuid,
        name,
        logo,
        abreviation
    }
`

export const CORE_CANDIDATE_FIELDS = gql`
    fragment coreCandidateFields on Candidate {
        id,
        uuid,
        first_name,
        last_name,
        gender,
        photo,
        age,
    }
`

export const CORE_POLLING_UNIT_FIELDS = gql`
    fragment corePollingUnitFields on PollingUnit {
        id,
        uuid,
        name,
    }
`

export const CORE_VOTING_FIELDS = gql`
    fragment coreVotingFields on Voting {
        id,
        uuid,
        registered_voters,
        accredited_voters,
        votes_casted,
        valid_votes,
        invalid_votes,
        date,
    }
`
export const CORE_AGENT_FIELDS = gql`
    fragment coreAgentFields on User {
        id,
        uuid,
        name,
        email,
        clrs,
        photo
    }
`

export const CORE_VOTE_COUNT_FIELDS = gql`
    fragment coreVoteCountFields on VoteCount {
        id,
        uuid,
        votes,
    }
`

export const CORE_PAGINATOR_INFO = gql`
    fragment corePaginatorInfoFields on PaginatorInfo {
        count,
        firstItem,
        currentPage,
        hasMorePages,
        perPage,
        total
    }
`