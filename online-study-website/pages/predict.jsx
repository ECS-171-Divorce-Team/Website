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
    //Stringify the studentData to json Object then push through POST request.
    const [modelName, setModelName] = useState("Pick a model for prediction")
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
            <div className="text-center">
                <DropdownButton
                    variant={`secondary`}
                    title={modelName}
                    key={0}
                >
                    {
                        Object.entries(modelPageContents).map(([key, value]) => {
                            return (
                                <Dropdown.Item
                                    as='button'
                                    eventKey={key}
                                    onClick={() => {
                                        setModelName(value.title)
                                    }}
                                    key={key}
                                >
                                    {value.title}
                                </Dropdown.Item>
                            )
                        })
                    }
                </DropdownButton>
            </div>
            <ul class="list-group list-group-flush">
                {
                    Object.entries(studentData).map(([key, value]) => {
                        if (options[key]) {
                            return (
                                <li class='list-group-item' key={key}>
                                    <InputItem type={'choice'} question={key} choices={options[key]} setStateFunc={setStudentData} />
                                </li>
                            )
                        } else {
                            return (

                                <li class='list-group-item' key={key}>
                                    <InputItem type={'numeric'} question={key} setStateFunc={setStudentData} />
                                </li>
                            )
                        }
                    })
                }
            </ul>
            <div className="text-end mt-5">
                <button type="button" class="btn btn-primary btn-lg">Prediction</button>
            </div>
        </div>
    )
}