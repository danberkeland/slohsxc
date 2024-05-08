import React, { useState, useEffect } from "react";
import { generateClient } from "@aws-amplify/api";
import { createNonAthlete } from "./graphql/mutations";
import { listAthletes } from "./graphql/queries";

const client = generateClient();

function NonAthlete() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [athlete, setathlete] = useState([]); // Store IDs of selected athletes
    const [relationRole, setRelationRole] = useState("");
    const [athletes, setAthletes] = useState([]); // Store fetched list of athletes
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        async function fetchAthletes() {
            try {
                const { data } = await client.graphql({ query: listAthletes });
                setAthletes(data.listAthletes.items);
                setError(""); // Clear any previous errors
            } catch (err) {
                console.error("Error fetching athletes:", err);
                setError("Failed to fetch athletes");
            }
            setLoading(false);
        }
        fetchAthletes();
    }, []);

    const handleAthleteChange = (event) => {
        const selectedOptions = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        );
        setathlete(selectedOptions);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const nonAthleteDetails = {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                athlete: athlete,
                relationRole: relationRole,
            };
            console.log('nonAthleteDetails', nonAthleteDetails)
            const newNonAthlete = await client.graphql({
                query: createNonAthlete,
                variables: {
                    input: nonAthleteDetails,
                },
            });
            console.log("NonAthlete created:", newNonAthlete);
            setError(""); // Clear error on successful creation
        } catch (err) {
            console.error("Error creating nonAthlete:", err);
            setError("Failed to create nonAthlete");
        }
        setLoading(false);
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
                <label htmlFor="relationRole">Relation Role:</label>
                <input
                    id="relationRole"
                    type="text"
                    value={relationRole}
                    onChange={(e) => setRelationRole(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="athlete">Athletes:</label>
                <select
                    id="athlete"
                    multiple
                    value={athlete}
                    onChange={handleAthleteChange}
                    required
                >
                    <option value="">Select Athletes</option>
                    {athletes.map((athlete) => (
                        <option key={athlete.id} value={athlete.id}>
                            {athlete.firstName} {athlete.lastName}
                        </option>
                    ))}
                </select>
            </div>
            {error && <p>Error: {error}</p>}
            <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Add NonAthlete"}
            </button>
        </form>
    );
}

export default NonAthlete;
