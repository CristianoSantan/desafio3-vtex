import React from 'react';
import './leadForm.css';

const LeadForm: StorefrontFunctionComponent<LeadFormProps> = () => {

    return (
        <div className="form">
            <form style={{
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                margin: '200px auto',
                width: '500px'
            }}>
                <label htmlFor="name" style={{ marginTop: '10px' }}>Nome</label>
                <input type="text" name="name" />
                <label htmlFor="email" style={{ marginTop: '10px' }}>Email</label>
                <input type="email" name="email" />
                <label htmlFor="phone" style={{ marginTop: '10px' }}>Telefone</label>
                <input type="number" name="phone" />
                <input
                    type="submit"
                    value="Enviar"
                    style={{
                        marginTop: '10px'
                    }} />
            </form>
        </div>
    )
}

interface LeadFormProps {
    form: string
}

export default LeadForm;