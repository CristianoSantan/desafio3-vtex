import React from 'react';

const LeadForm: StorefrontFunctionComponent<LeadFormProps> = () => {
    return (
        <div>
            <form>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                <label htmlFor="phone">Telefone</label>
                <input type="number" name="phone" />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

interface LeadFormProps {
    form: string
}

export default LeadForm;