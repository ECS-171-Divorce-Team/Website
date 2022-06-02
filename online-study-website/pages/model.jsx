import { useRouter } from "next/router"
import Image from "next/image"
import { modelPageContents } from "../src/projectData"
import { useState } from "react"
import { useEffect } from "react"
import styles from '../styles/Models.module.css'

export default function Model () {
    const router = useRouter()
    const {
        query: { pageName }
    } = router

    //USE REACT HOOK STATE here to fix the pageContent doesn't recognize 'imgList' as a key in dictionary (only happen in build)

    const [pageContent, setPageContent] = useState({
        'title': '',
        'details': '',
        'content': ['']
    })


    useEffect(() => {
        setPageContent(previousState => {
            let numOfImgs = modelPageContents[pageName]['imgList'].length
            let numRows = numOfImgs % 2 + 1
            let imgRows = ['']
            for (let i = 0; i < numRows; i++) {
                imgRows.push(
                    <>
                        <div className={`text-center ${styles.image}`}>
                            <Image src={modelPageContents[pageName]['imgList'][i * 2]} width={600} height={600} />
                        </div>
                        <div className={`text-center ${styles.image}`}>
                            <Image src={modelPageContents[pageName]['imgList'][i * 2 + 1]} width={600} height={600} />
                        </div>
                    </>
                )
            }

            return {
                ...previousState,
                'title': modelPageContents[pageName]['title'],
                'details': modelPageContents[pageName]['details'],
                'content': imgRows
            }
        })
        //! Sucessfully in implementing, but the rowImgs is empty on first load, so find some workaround
    }, [pageName])

    return (
        <div className={`container-fluid`}>
            <div className='row'>
                <h1 className={`display-5 col`}>{pageContent['title']}</h1>
                <p className={`col`}>
                    {pageContent['details']}
                </p>
            </div>
            {
                pageContent['content'].map((elem) => {
                    return (elem)
                })
            }
        </div>
    )
}