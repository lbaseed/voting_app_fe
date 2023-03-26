import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Input,
  Tooltip,
  Select,
  Progress,
  Option,
  Button,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import {
  useGetElections,
  useGetLgas,
  useGetParties,
} from "@/hooks/query_hooks";
import Spinner from "@/widgets/layout/loading";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@apollo/client";
import { CREATE_VOTING_VOTE_COUNT } from "@/gql/mutations";
// import Select from 'react-select'

export const Votings = () => {
  const [loader, setLoader] = useState(false);
  const getLgas = useGetLgas({ state_id: 1 });
 
  useEffect(() => {
    if (getLgas.loading == true) {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }, [getLgas.loading]);

  const [createVotingOptions] = useMutation(CREATE_VOTING_VOTE_COUNT, {
    onCompleted: (data) => {
      toast.success("Voting Record Uploaded Successfully, Thank you!");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error);
    },
  });

  // const getParties = useGetParties()
  // const getElections = useGetElections()
  // const lgaOptions = getLgas?.data?.allLgas?.map((item) => ({  value: item.id, label : item.name  }))
  const [lga, setLga] = useState("");
  const [ward, setWard] = useState("");
  const [pollingUnit, setPollingUnit] = useState("");

  const [accreditedVoters, setAccreditedVoters] = useState("");
  const [totalCastedVotes, setTotalCastedVotes] = useState("");
  const [totalValidVotes, setTotalValidVotes] = useState("");
  const [totalInvalidVotes, setTotalInvalidVotes] = useState("");

  const [apc, setApc] = useState("");
  const [pdp, setPdp] = useState("");
  const [sdp, setSdp] = useState("");
  const [nnpp, setNnpp] = useState("");

  const [wards, setWards] = useState([]);
  const [pollingUnits, setPollingUnits] = useState([]);

  useEffect(() => {
    getLgas &&
      setWards(
        getLgas?.data?.allLgas
          ?.filter((item) => item.id === lga)
          .map((filteredItem) => filteredItem.wards)
      );
  }, [lga]);

  useEffect(() => {
    getLgas &&
      setPollingUnits(
        wards?.[0]
          ?.filter((item) => item.id === ward)
          .map((filteredItem) => filteredItem.pollingUnits)
      );
  }, [ward]);

  const handleVoting = async () => {
    setLoader(true);
    if (
      accreditedVoters &&
      totalCastedVotes &&
      totalValidVotes &&
      totalInvalidVotes &&
      apc &&
      pdp &&
      sdp &&
      nnpp &&
      pollingUnit &&
      ward &&
      lga
    ) {
      const voteCounts = [
        {
          election_id: "2",
          polling_unit_id: pollingUnit,
          political_party_id: "1",
          votes: apc,
        },
        {
          election_id: "2",
          polling_unit_id: pollingUnit,
          political_party_id: "2",
          votes: pdp,
        },
        {
          election_id: "2",
          polling_unit_id: pollingUnit,
          political_party_id: "3",
          votes: sdp,
        },
        {
          election_id: "2",
          polling_unit_id: pollingUnit,
          political_party_id: "4",
          votes: nnpp,
        },
      ];
      // create voting record
      await createVotingOptions({
        variables: {
          election_id: "2",
          polling_unit_id: pollingUnit,
          accredited_voters: accreditedVoters,
          votes_casted: totalCastedVotes,
          valid_votes: totalValidVotes,
          invalid_votes: totalInvalidVotes,
          vote_counts: voteCounts,
        },
      });

      setWard("");
      setPollingUnit("");

      setAccreditedVoters("");
      setTotalCastedVotes("");
      setTotalValidVotes("");
      setTotalInvalidVotes("");

      setApc("");
      setPdp("");
      setSdp("");
      setNnpp("");
      setLoader(false);
    } else {
      setLoader(false);
      toast.error("Please Fill all fields");
    }

    setLoader(false);
  };

  return (
    <>
      <Spinner enabled={loader} />
      <ToastContainer />
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="white" className="mb-8 p-6">
            <Typography variant="h6" color="blue">
              Upload Polling Unit Votes
            </Typography>
          </CardHeader>
          <CardBody className="px-0 pt-0 pb-2">
            <div className="flex flex-wrap gap-5 px-5">
              <div className="flex flex-1 flex-col gap-7 px-5 pb-5">
                General Voting Info
                {/* form to select PU and Party information */}
                <div>
                  <Select
                    onChange={(value) => setLga(value)}
                    variant="standard"
                    label="Select LGA"
                    // options={lgaOptions}
                  >
                    {getLgas.loading === false ? (
                      getLgas?.data?.allLgas?.map((lga) => (
                        <Option key={lga.uuid} value={lga.id}>
                          {lga.name}
                        </Option>
                      ))
                    ) : (
                      <Option value={"select2"}>Select LGA</Option>
                    )}
                  </Select>
                </div>
                <div>
                  <Select
                    variant="standard"
                    label="Select Ward"
                    onChange={(value) => setWard(value)}
                    //  options={wards?.[0]?.map((item) => ({value: item.id, label: item.name}))}
                  >
                    {getLgas.loading === false ? (
                      wards?.[0]?.length > 0 ? (
                        wards?.[0]?.map((item) => (
                          <Option key={item.uuid} value={item.id}>
                            {item.name}
                          </Option>
                        ))
                      ) : (
                        <Option value="select1">Select Ward</Option>
                      )
                    ) : (
                      <Option value="select1">Select Ward</Option>
                    )}
                  </Select>
                </div>
                <div>
                  <Select
                    id="pollingUnit"
                    onChange={(value) => setPollingUnit(value)}
                    variant="standard"
                    label="Select Polling Unit"
                  >
                    {getLgas.loading === false ? (
                      pollingUnits?.[0]?.length > 0 ? (
                        pollingUnits?.[0]?.map((item) => (
                          <Option key={item.uuid} value={item.id}>
                            {item.name} 
                            <span className="font-medium ml-3">
                              [{item.inec_ref}]</span>
                          </Option>
                        ))
                      ) : (
                        <Option value="select1">Select Polling Unit</Option>
                      )
                    ) : (
                      <Option value="select1">Select Polling Unit</Option>
                    )}
                  </Select>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3 px-5 pb-5">
                Political Voting Info
                {/* <div>
                  <Select 
                  id="elections" 
                  variant="standard" 
                  label="Pick Election"
                  onChange={(value) => setElection(value)}
                  >
                      {!getElections.loading ? 
                      getElections?.data?.allElections?.map( (election) => (
                        <Option value={election.id} key={election.uuid}>{election.name}</Option>
                        )): (<Option value="">Select Election</Option>)}
                  </Select>
                </div> */}
                {/* <div>
                  <Select 
                  id="policalParty" 
                  variant="standard" 
                  label="Political Party"
                  onChange={(value) => setParty(value)}
                  >
                      {!getParties.loading ? 
                      getParties?.data?.allPoliticalParties?.map( (party) => (
                        <Option value={party.id} key={party.uuid}>{party.name}</Option>
                        )): (<Option value="">Select Party</Option>)}
                  </Select>
                </div> */}
                <div>
                  <Input
                    label="Total Accredited Voters"
                    value={accreditedVoters}
                    onChange={(e) => setAccreditedVoters(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    label="Total Votes Casted"
                    value={totalCastedVotes}
                    onChange={(e) => setTotalCastedVotes(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    label="Total Valid Votes"
                    value={totalValidVotes}
                    onChange={(e) => setTotalValidVotes(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    label="Total Invalid Votes"
                    value={totalInvalidVotes}
                    onChange={(e) => setTotalInvalidVotes(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    label="APC Votes"
                    value={apc}
                    onChange={(e) => setApc(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    label="PDP Votes"
                    value={pdp}
                    onChange={(e) => setPdp(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    label="SDP Votes"
                    value={sdp}
                    onChange={(e) => setSdp(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    label="NNPP Votes"
                    value={nnpp}
                    onChange={(e) => setNnpp(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mb-4 flex justify-center">
              <Button onClick={handleVoting}>Send Result</Button>
            </div>
          </CardBody>
        </Card>
        {/* <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Uploaded Results
          </Typography>
        </CardHeader>
        <CardBody className="overflow-auto px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["companies", "members", "budget", "completion", ""].map(
                  (el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {projectsTableData.map(
                ({ img, name, members, budget, completion }, key) => {
                  const className = `py-3 px-5 ${
                    key === projectsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        {members.map(({ img, name }, key) => (
                          <Tooltip key={name} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size="xs"
                              variant="circular"
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`}
                            />
                          </Tooltip>
                        ))}
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {budget}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="w-10/12">
                          <Typography
                            variant="small"
                            className="mb-1 block text-xs font-medium text-blue-gray-600"
                          >
                            {completion}%
                          </Typography>
                          <Progress
                            value={completion}
                            variant="gradient"
                            color={completion === 100 ? "green" : "blue"}
                            className="h-1"
                          />
                        </div>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          <EllipsisVerticalIcon
                            strokeWidth={2}
                            className="h-5 w-5 text-inherit"
                          />
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card> */}
      </div>
    </>
  );
};

export default Votings;
