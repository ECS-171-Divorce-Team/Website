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

    //USE REACT HOOK STATE here to fix the pageContent doesn't recognize 'imgList' as a key in dictionary (only happen in build)

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
                    {pageContent['details']}
                </p>
            </div>
            {
                rowImgs.map((elem, index) => {
                    return (
                        <div className="row" key={index}>
                            <div className="col rounded float-start">
                                <Image src={elem[0]} width={1780} height={1000} />
                            </div>
                            <div className="col rounded float-start">
                                <Image src={elem[1]} width={1780} height={1000} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}