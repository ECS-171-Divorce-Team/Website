import Image from "next/image";
import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { modelPageContents } from "../src/projectData";

export default function Compare () {
    const [firstData, setFirstData] = useState({ title: "Pick model to compare" });
    const [secondData, setSecondData] = useState({ title: "Pick model to compare" });
    const update = (graphTitle, setFunction) => {
        setFunction(previousState => {
            return {
                ...previousState,
                title: modelPageContents[graphTitle]['title'],
                details: modelPageContents[graphTitle]['details'],
                imgList: modelPageContents[graphTitle]['imgList'],
                confusion: modelPageContents[graphTitle]['confusion'],
                report: modelPageContents[graphTitle]['report']
            }
        });
    }



    return (
        <div className="container-fluid" key={0}>
            <div className="row">
                <div className="col text-center">
                    Item 1
                    <Dropdown>
                        <DropdownButton
                            id={`dropdown-variants-Secondary`}
                            variant={`secondary`}
                            title={`${firstData.title}`}
                        >
                            {
                                Object.entries(modelPageContents).map(([key, value]) => {
                                    return (
                                        <DropdownItem
                                            as='button'
                                            eventKey={key}
                                            onClick={() => { update(value.title, setFirstData) }}
                                        >
                                            {value.title}
                                        </DropdownItem>
                                    )
                                })
                            }
                        </DropdownButton>
                    </Dropdown>
                    <div className="img-fluid">
                        <Image src={firstData.imgList[0]} width={700} height={700} />
                        {/* Error because no element in imgList yet. THink about how to use useEffect to only load this when
                        the state change => aka when user make a selection so that we can have some value */}
                    </div>
                </div>
                <div className="col text-center">
                    Item 2
                    <Dropdown>
                        <DropdownButton
                            id={`dropdown-variants-Secondary`}
                            variant={`secondary`}
                            title={`${secondData.title}`}
                        >
                            {
                                Object.entries(modelPageContents).map(([key, value]) => {
                                    return (
                                        <DropdownItem
                                            as='button'
                                            eventKey={key}
                                            onClick={() => { update(value.title, setSecondData) }}
                                        >
                                            {value.title}
                                        </DropdownItem>
                                    )
                                })
                            }
                        </DropdownButton>
                    </Dropdown>
                    <div className="img-fluid">
                        <Image src={firstData.imgList[1]} width={700} height={700} />
                        {/* Error because no element in imgList yet. THink about how to use useEffect to only load this when
                        the state change => aka when user make a selection so that we can have some value */}
                    </div>
                </div>
            </div>
            <div className="row">

            </div>
        </div>
    )
}