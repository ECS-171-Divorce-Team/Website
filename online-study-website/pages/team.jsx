import styles from '../styles/Team.module.css'
import MemberDesc from "../components/MemberDesc";
// import { Members } from '../src/members';

const Members = [
    {
        name: "Justin Guan",
        desc: "Hello, my name is Justin. I am currently a 3rd year in Computer Science. My hobbies include watching shows and traveling. One interesting fact is that I have watched all the Marvel Movies in theaters",
        imgURL: '/teamPics/idino.png'
    },
    {
        name: "Justin Guan",
        desc: "Hello, my name is Justin. I am currently a 3rd year in Computer Science. My hobbies include watching shows and traveling. One interesting fact is that I have watched all the Marvel Movies in theaters",
        imgURL: '/teamPics/idino.png'
    },
    {
        name: "Justin Guan",
        desc: "Hello, my name is Justin. I am currently a 3rd year in Computer Science. My hobbies include watching shows and traveling. One interesting fact is that I have watched all the Marvel Movies in theaters",
        imgURL: '/teamPics/idino.png'
    },
    {
        name: "Justin Guan",
        desc: "Hello, my name is Justin. I am currently a 3rd year in Computer Science. My hobbies include watching shows and traveling. One interesting fact is that I have watched all the Marvel Movies in theaters",
        imgURL: '/teamPics/idino.png'
    },
    {
        name: "Justin Guan",
        desc: "Hello, my name is Justin. I am currently a 3rd year in Computer Science. My hobbies include watching shows and traveling. One interesting fact is that I have watched all the Marvel Movies in theaters",
        imgURL: '/teamPics/idino.png'
    },
    {
        name: "Justin Guan",
        desc: "Hello, my name is Justin. I am currently a 3rd year in Computer Science. My hobbies include watching shows and traveling. One interesting fact is that I have watched all the Marvel Movies in theaters",
        imgURL: '/teamPics/idino.png'
    },
]

export default function Team () {
    const rowData = []
    for (let index = 0; index < Members.length; index += 2) {
        if (index % 2 == 0 && index + 1 < Members.length) {
            rowData.push([Members[index], Members[index + 1]])
        }
    }

    return (
        <div className={`container-fluid ${styles.container}`}>
            {
                rowData.map((list, index) => {
                    return (<div className={`row justify-content-evenly ${styles.memberRow}`} key={index}>
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