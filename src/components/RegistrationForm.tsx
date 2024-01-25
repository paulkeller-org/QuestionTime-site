
import React, { useState, useMemo } from "react";
import { Field } from "@components";

type RegistrationInformation = {
    name: string;
    email: string;
    confirmEmail: string;
    address1: string;
    address2?: string;
    townOrCity: string;
    postCode: string;
    preferredUsername: string;
}

type RegistrationProps = {
    onRegistration: (registrationInfo: RegistrationInformation) => void;
}

/*  Simple registration react component that will allow a user to register and 
    choose their own username.
*/

const RegistrationForm = (registrationProps: RegistrationProps) => {

    const { onRegistration } = registrationProps;
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [confirmEmail, SetConfirmEmail] = useState("");
    const [address1, SetAddress1] = useState("");
    const [address2, SetAddress2] = useState("");
    const [townOrCity, SetTownOrCity] = useState("");
    const [postCode, SetPostCode] = useState("");
    const [preferredUsername, SetPreferredUsername] = useState("");

    const registionInformation: RegistrationInformation = useMemo(() => {
        return {
            name,
            email,
            confirmEmail,
            address1,
            address2,
            townOrCity,
            postCode,
            preferredUsername
        }
    }, [name,
        email,
        confirmEmail,
        address1,
        address2,
        townOrCity,
        postCode,
        preferredUsername])
    const cannotRegister = useMemo(() =>
    (name.trim() === "" ||
        email.trim() === "" ||
        confirmEmail.trim() === "" ||
        address1.trim() === "" ||
        townOrCity.trim() === "" ||
        postCode.trim() === "" ||
        preferredUsername.trim() === ""
    ), [name,
        email,
        confirmEmail,
        address1,
        townOrCity,
        postCode, preferredUsername]);

    return (
        <React.Fragment>
            <Field fieldName="Name" onFieldChange={SetName} required={true} />
            <Field fieldName="Email" onFieldChange={SetEmail} required={true} />
            <Field fieldName="ConfirmEmail" onFieldChange={SetConfirmEmail} required={true} />
            <Field fieldName="Address1" onFieldChange={SetAddress1} required={true} />
            <Field fieldName="Address2" onFieldChange={SetAddress2} />
            <Field fieldName="TownOrCity" onFieldChange={SetTownOrCity} required={true} />
            <Field fieldName="Postcode" onFieldChange={SetPostCode} required={true} />
            <Field fieldName="Preferred Username" onFieldChange={SetPreferredUsername} required={true} />
            <div>
                <button name="Register" disabled={cannotRegister} onClick={() => onRegistration(registionInformation)}>
                    Register
                </button>
            </div>
        </React.Fragment>
    );
}

export default RegistrationForm;
