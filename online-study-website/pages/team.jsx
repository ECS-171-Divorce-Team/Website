import styles from '../styles/Team.module.css'
import MemberDesc from "../components/MemberDesc";
import { Members } from '../src/members';

export default function Team () {
    const rowData = []
    let leftOverMember = ''
    for (let index = 0; index < Members.length; index += 2) {
        if (index % 2 == 0) {
            if (index + 1 < Members.length) {
                rowData.push([Members[index], Members[index + 1]])
            } else {
                leftOverMember = Members[index]
            }
        }
    }

    return (
        <div className={`container-fluid ${styles.container}`}>
            {
                rowData.map((list, index) => {
                    return (
                        <div className={`row justify-content-evenly ${styles.memberRow}`} key={index}>
                            <div className='col-3'>
                                <MemberDesc
                                    name={list[0].name}
                                    desc={list[0].desc}
                                    profileURL={list[0].imgURL} />
                            </div>
                            <div className='col-3'>
                                <MemberDesc
                                    name={list[1].name}
                                    desc={list[1].desc}
                                    profileURL={list[1].imgURL} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}