import { useEffect } from "react";
import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import InputItem from "../components/InputItem";
import { modelPageContents } from "../src/projectData";

const options = {
    "Gender": ["Male", "Female"],
    "Home Location": ['Urban', 'Rural'],
    "Level of Education": ['Under Graduate', 'Post Graduate', 'School'],
    "Device type used to attend classes": ["Laptop", 'Desktop', 'Mobile'],
    'Economic status': ['Middle Class', 'Poor', 'Rich'],
    'Are you involved in any sports?': ['No', 'Yes'],
    'Do elderly people monitor you?': ['Yes', 'No'],
    'Interested in Gaming?': ['No', 'Yes'],
    'Have separate room for studying?': ['No', 'Yes'],
    'Engaged in group studies?': ['No', 'yes'],
    'Average marks scored before pandemic in traditional classroom': ['91-100', '71-80', '81-90', '61-70', '31-40', '41-50', '21-30', '11-20', '51-60', '0-10'],
    'Interested in?': ['Practical', 'Theory', 'Both'],
    'Your level of satisfaction in Online Education': ['Average', 'Bad', 'Good'],
}

export default function Predict () {
    const [dropTitle, setDropTitle] = useState("Pick a model for prediction")
    const [studentData, setStudentData] = useState({
        "Gender": "",
        "Home Location": "",
        "Level of Education": "",
        "Age(Years)": "",
        "Number of Subjects": "",
        "Device type used to attend classes": "",
        "Economic status": "",
        "Family size": "",
        "Internet facility in your locality": "",
        "Are you involved in any sports?": "",
        "Do elderly people monitor you?": "",
        "Study time (Hours)": "",
        "Sleep time (Hours)": "",
        "Time spent on social media (Hours)": "",
        "Interested in Gaming?": "",
        "Have separate room for studying?": "",
        "Engaged in group studies?": "",
        "Average marks scored before pandemic in traditional classroom": "",
        "Your interaction in online mode": "",
        "Clearing doubts with faculties in online mode": "",
        "Interested in?": "",
        "Performance in online": "",
    })

    return (
        <div className='container'>
            <h5>Fill data to predict studen satisfaction in online studying: </h5>
            <DropdownButton
                variant={`secondary`}
                title={dropTitle}
                key={0}
            >
                {
                    Object.entries(modelPageContents).map(([key, value]) => {
                        return (
                            <Dropdown.Item
                                as='button'
                                eventKey={key}
                                onClick={() => {
                                    setDropTitle(value.title)
                                }}
                            >
                                {value.title}
                            </Dropdown.Item>
                        )
                    })
                }
            </DropdownButton>
            <ul class="list-group list-group-flush">
                {
                    Object.entries(studentData).map(([key, value]) => {
                        return (
                            <li class='list-group-item' key={key}>
                                <InputItem type={'numeric'} question={key} setStateFunc={setStudentData} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>


        // <div className="form">
        //     <form action="/api/result" method="get">
        //         Place: <input type='text' name='place' />
        //         <input type='submit' value='Submit' />
        //     </form>
        // </div>
    )
}