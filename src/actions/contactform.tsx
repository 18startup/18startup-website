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
                message: 'Response Saved Successfully!'
            }
        }
        else {
            return {
                success: false,
                message: 'Issue saving Reponse. Try again!'
            }
        }

    } catch (error) {
        console.log(error);
        throw new Error('Internal Server Error!');
    }

}