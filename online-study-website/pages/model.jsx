import { useRouter } from "next/router"
import Image from "next/image"
import { modelPageContents } from "../src/projectData"

export default function Model () {
    const router = useRouter()
    const {
        query: { pageName }
    } = router
    let leftOverImg = ''
    let pageContent = modelPageContents[pageName]
    let rowImgs = []

    for (let index = 0; index < pageContent['imgList'].length; index += 2) {
        if (index % 2 == 0) {
            if (index + 1 < pageContent['imgList'].length) {
                rowImgs.push([pageContent['imgList'][index], pageContent['imgList'][index + 1]])
            } else {
                leftOverImg = pageContent['imgList'][index]
            }
        }
    }

    return (
        <div className={`container-fluid`}>
            <div className='row'>
                <h1 className={`display-1 col`}>{pageContent['title']}</h1>
                <p className={`col`}>
                    {pageContent['desc']}
                </p>
            </div>
            {
                rowImgs.map((elem, index) => {
                    return (
                        <div className="row" key={index}>
                                <img className="rounded float-start" src={elem[0]} />
                                <img className="rounded float-end" src={elem[1]} />
                        </div>
                    )
                })
            }
        </div>
    )
}