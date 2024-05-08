import React, { useState } from "react";
import { generateClient } from "@aws-amplify/api";
import { createAthlete } from "./graphql/mutations"; // auto-generated GraphQL mutation

const client = generateClient();

function Athlete() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState('');
    const [gradYear, setGradYear] = useState('');
    const [highSchool, setHighSchool] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [college, setCollege] = useState('');
    const [isValid, setIsValid] = useState(true);

    // Regular expression to validate the date format
    const dateRegex = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/;

    const handleChangeBirthday = (event) => {
        const { value } = event.target;
        setBirthday(value); // Always update the input to allow typing
        setIsValid(dateRegex.test(value)); // Validate but allow the user to continue typing
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!dateRegex.test(birthday)) {
            console.error('Invalid date format. Please use MM-DD-YYYY');
            setIsValid(false); // Set to false to trigger error message in the UI
            return; // Prevent form submission
        }
        setIsValid(true); // Ensure the flag is set to true if all checks pass
        try {
            const athleteDetails = {
                firstName,
                lastName,
                birthday,
                gradYear,
                highSchool,
                phone,
                email,
                college
            };
            const newAthlete = await client.graphql({
                query: createAthlete,
                variables: {
                    input: athleteDetails
                }
            });
            console.log("Athlete created:", newAthlete);
        } catch (err) {
            console.error("Error creating athlete:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="birthday">Birthday (MM-DD-YYYY):</label>
                <input
                    id="birthday"
                    type="text"
                    value={birthday}
                    onChange={handleChangeBirthday}
                    placeholder="MM-DD-YYYY"
                    required
                />
                {!isValid && <p>Please enter a valid date in the format MM-DD-YYYY.</p>}
            </div>
            <div>
                <label htmlFor="gradYear">Graduation Year:</label>
                <input
                    id="gradYear"
                    type="number"
                    value={gradYear}
                    onChange={(e) => setGradYear(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="highSchool">High School:</label>
                <input
                    id="highSchool"
                    type="text"
                    value={highSchool}
                    onChange={(e) => setHighSchool(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="college">College:</label>
                <input
                    id="college"
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                />
            </div>
            <button type="submit">Add Athlete</button>
        </form>
    );
}

export default Athlete;
