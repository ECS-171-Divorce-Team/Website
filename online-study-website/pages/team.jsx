import Header from "../components/Header";
import styles from '../styles/Team.module.css'
import MemberDesc from "../components/MemberDesc";

export default function Team () {
    return (
        <div className={`container-fluid ${styles.container}`}>
            <div className={`row ${styles.member}`}>
                <div className='col-2'>
                    <MemberDesc name={'First Name Last Name'} desc={'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference'} profileURL={'/teamPics/idino.png'} />
                </div>
                <div className='col-2'>
                    <MemberDesc name={'First Name Last Name'} desc={'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference'} profileURL={'/teamPics/idino.png'} />
                </div>
                <div className='col-2'>
                    <MemberDesc name={'First Name Last Name'} desc={'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference'} profileURL={'/teamPics/idino.png'} />
                </div>
                <div className='col-2'>
                    <MemberDesc name={'First Name Last Name'} desc={'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference'} profileURL={'/teamPics/idino.png'} />
                </div>
                <div className='col-2'>
                    <MemberDesc name={'First Name Last Name'} desc={'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference'} profileURL={'/teamPics/idino.png'} />
                </div>
                <div className='col-2'>
                    <MemberDesc name={'First Name Last Name'} desc={'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference'} profileURL={'/teamPics/idino.png'} />
                </div>
            </div>
        </div>
    )
}