import { computeStyles } from "@popperjs/core";
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
        report: "",
        graphs: [""],
    });
    const [secondData, setSecondData] = useState({
        title: "Pick model to compare",
        details: "",
        imgList: [""],
        confusion: "",
        report: "",
        graphs: [""],
    });
    const update = (graphTitle, setFunction) => {
        setFunction(previousState => {
            return {
                ...previousState,
                title: modelPageContents[graphTitle]['title'],
                details: modelPageContents[graphTitle]['details'],
                imgList: modelPageContents[graphTitle]['imgList'],
                confusion: modelPageContents[graphTitle]['confusion'],
                report: modelPageContents[graphTitle]['report'],
                graphs: modelPageContents[graphTitle]['graphs']
            }
        });
    }

    const [firstLoad, setFirstLoad] = useState(true)
    const [secondLoad, setSecondLoad] = useState(true)
    // const [firstElem, setFirstElem] = useState({
    //     'imgElem': [],
    //     'confusion': [],
    //     'report': [],
    //     'graphs': []
    // })
    const [compareElem, setCompareElem] = useState({
        'imgElem': [],
        'confusion': [],
        'report': [],
        'graphs': []
    })
    //IN order to use useEffect, needs to be use on a state value
    useEffect(() => {   //Make dictionary of elements so that it's easier to organize things later
        if (!firstLoad && secondLoad) {
            setCompareElem(() => {
                return {
                    'imgElem': (
                        <div className="row">
                            <div className="col">
                                <Image src={firstData.imgList[0]} width={500} height={500} />
                            </div>
                        </div>
                    ),
                    "confusion": (
                        <div className="row border-top">
                            <h2 className="display-5">Confusion Matrix</h2>
                            <div className="col text-center">
                                <Image src={firstData.confusion} width={400} height={400} />
                            </div>
                        </div>
                    ),
                    "report": (
                        <div className="row border-top">
                            <h2 className="display-5">Classification Report</h2>
                            <div className="col text-center">
                                <Image src={firstData.report} width={400} height={400} />
                            </div>
                        </div>
                    ),
                    "graphs": (
                        <div className="row border-top">
                            <h2 className="display-5">Graphs</h2>
                            <div className="col text-center">
                                {
                                    firstData.graphs.map((elem) => {
                                        return (
                                            <div className="img-fluid">
                                                <Image src={elem} width={300} height={300} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            })
        }
        if (!secondLoad && firstLoad) {
            setCompareElem(() => {
                return {
                    'imgElem': (
                        <div className="row">
                            <div className="col"></div>
                            <div className="col">
                                <Image src={secondData.imgList[0]} width={500} height={500} />
                            </div>
                        </div>
                    ),
                    "confusion": (
                        <div className="row border-top">
                            <h2 className="display-5">Confusion Matrix</h2>
                            <div className="col text-center">
                                <Image src={secondData.confusion} width={400} height={400} />
                            </div>
                        </div>
                    ),
                    "report": (
                        <div className="row border-top">
                            <h2 className="display-5">Classification Report</h2>
                            <div className="col text-center">
                                <Image src={secondData.report} width={400} height={400} />
                            </div>
                        </div>
                    ),
                    "graphs": (
                        <div className="row border-top">
                            <h2 className="display-5">Graphs</h2>
                            <div className="col text-center">
                                {
                                    secondData.graphs.map((elem) => {
                                        return (
                                            <div className="img-fluid">
                                                <Image src={elem} width={300} height={300} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            })
        }
        if (!firstLoad && !secondLoad) {
            setCompareElem(() => {
                return {
                    'imgElem': (
                        <div className="row">
                            <div className="col text-center">
                                <Image src={firstData.imgList[0]} width={500} height={500} />
                            </div>
                            <div className="col text-center">
                                <Image src={secondData.imgList[0]} width={500} height={500} />
                            </div>
                        </div>
                    ),
                    "confusion": (
                        <div className="row border-top">
                            <h2 className="display-5">Confusion Matrix</h2>
                            <div className="col text-center">
                                <Image src={firstData.confusion} width={400} height={400} />
                            </div>
                            <div className="col text-center">
                                <Image src={secondData.confusion} width={400} height={400} />
                            </div>
                        </div>
                    ),
                    "report": (
                        <div className="row border-top">
                            <h2 className="display-5">Classification Report</h2>
                            <div className="col text-center">
                                <Image src={firstData.report} width={400} height={400} />
                            </div>
                            <div className="col text-center">
                                <Image src={secondData.report} width={400} height={400} />
                            </div>
                        </div>
                    ),
                    "graphs": (
                        <div className="row border-top">
                            <h2 className="display-5">Graphs</h2>
                            <div className="col text-center">
                                {
                                    firstData.graphs.map((elem) => {
                                        return (
                                            <div className="img-fluid">
                                                <Image src={elem} width={300} height={300} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="col text-center">
                                {
                                    secondData.graphs.map((elem) => {
                                        return (
                                            <div className="img-fluid">
                                                <Image src={elem} width={300} height={300} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            })
        }
    }, [firstData, secondData])


    return (
        <div className="container" key={0}>
            <div className="row">
                <div className="col text-center">
                    <h1 className="display-3">{`${firstData.title}`}</h1>
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
                                            onClick={() => { update(value.title, setFirstData), setFirstLoad(false) }}
                                        >
                                            {value.title}
                                        </DropdownItem>
                                    )
                                })
                            }
                        </DropdownButton>
                    </Dropdown>
                </div>
                <div className="col text-center">
                    <h1 className="display-3">{`${secondData.title}`}</h1>
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
                                            onClick={() => { update(value.title, setSecondData), setSecondLoad(false) }}
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
            {
                compareElem['imgElem']
            }
            {
                compareElem['confusion']
            }
            {
                compareElem['report']
            }
            {
                compareElem['graphs']
            }
        </div>
    )
}