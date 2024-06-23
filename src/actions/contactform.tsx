'use server';

export default async function saveContactFormResponse(formData: FormData) {
    
    const messageResponse = {
        Full_Name: formData.get('Full_Name'),
        Email: formData.get('Email'),
        Contact_Number: formData.get('Contact_Number'),
        Message: formData.get('Message'),
    }

    try {
        
        const response = await fetch(`${process.env.SPREADSHEET_API_URL}`, {
            method: 'POST',
            body: JSON.stringify({data: messageResponse})
        })

        if (response.status === 201) {
            return {
                success: true,
                message: 'We got your inquiry. Our team reach you soon.'
            }
        }
        else {
            return {
                success: false,
                message: 'Issue submitting response. Try again!'
            }
        }

    } catch (error) {
        console.log(error);
        throw new Error('Internal Server Error!');
    }

}