import styles from '../styles/Team.module.css'
import MemberDesc from "../components/MemberDesc";

export default function Team () {
    return (
        <div className={`container-fluid ${styles.container}`}>
            <div className={`row justify-content-evenly ${styles.memberRow}`}>
                <div className='col-3'>
                    <MemberDesc
                        name={'Name'}
                        desc={'Hello, my name is Justin. I am currently a 3rd year in Computer Science. My hobbies include watching shows and traveling One interesting fact is that I have watched all the Marvel Movies in theaters'} profileURL={'/teamPics/idino.png'} />
                </div>
                <div className='col-3'>
                    <MemberDesc name={'Name'} desc={'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference'} profileURL={'/teamPics/idino.png'} />
                </div>
            </div>
            <div className={`row justify-content-evenly ${styles.memberRow}`}>
                <div className='col-3'>
                    <MemberDesc name={'Name'} desc={'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference'} profileURL={'/teamPics/idino.png'} />
                </div>
                <div className='col-3'>
                    <MemberDesc name={'Name'} desc={'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference'} profileURL={'/teamPics/idino.png'} />
                </div>
            </div>
            <div className={`row justify-content-evenly ${styles.memberRow}`}>
                <div className='col-3'>
                    <MemberDesc name={'Name'} desc={'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference'} profileURL={'/teamPics/idino.png'} />
                </div>
                <div className='col-3'>
                    <MemberDesc name={'Name'} desc={'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference'} profileURL={'/teamPics/idino.png'} />
                </div>
            </div>
        </div>
    )
}