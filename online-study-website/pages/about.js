import Header from "../components/Header"
import MemberDesc from "../components/MemberDesc"
import styles from '../styles/About.module.css'

export default function About () {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.member}>
                <MemberDesc name={'First Name Last Name'} desc={'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference'} profileURL={'/teamPics/idino.png'} />
            </div>
        </div>
    )
}