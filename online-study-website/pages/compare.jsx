import Image from "next/image";
import { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { modelPageContents } from "../src/projectData";

export default function Compare () {
    const [firstData, setFirstData] = useState({
        title: "Pick model to compare",
        details: "",
        imgList: [""],
        confusion: "",
        report: ""
    });
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

    const [firstLoad, setFirstLoad] = useState(true)
    const [firstElem, setFirstElem] = useState({
        'imgElem': [],
        'confusion': [],
        'report': []
    })
    //IN order to use useEffect, needs to be use on a state value
    useEffect(() => {   //Make dictionary of elements so that it's easier to organize things later
        if (!firstLoad) {
            setFirstElem(() => {
                return {
                    'imgElem': [<Image src={firstData.imgList[0]} width={500} height={500} />],
                    "confusion": [
                        <div className="confusion">
                            <Image src={firstData.confusion} width={400} height={400} />
                        </div>],
                    "report": [
                        <div className="report">
                            <Image src={firstData.report} width={400} height={400} />
                        </div>],
                }
            })
        } else {
            setFirstLoad(false)
        }
    }, [firstData])


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
                    {
                        firstElem['imgElem'].map((elem) => {
                            return (elem)
                        })
                    }
                    {
                        firstElem['confusion'].map((elem) => {
                            return (elem)
                        })
                    }
                    {
                        firstElem['report'].map((elem) => {
                            return (elem)
                        })
                    }
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
                </div>
            </div>
            <div className="row">

            </div>
        </div>
    )
}