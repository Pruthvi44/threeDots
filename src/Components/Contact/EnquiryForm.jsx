import './EnquiryForm.css';

function EnquiryForm() {
    return ( 
        <>
        <div className='enquiry-form'>
            <div className='titlinfo'>
                <h5>FILL OUT THE FORM AND WE'LL BE IN TOUCH SOON!</h5>
                <h2>LET'S GET STARTED</h2>
            </div>
            <form>
                <input type='text' name='name' required/>
            </form>
        </div>
        </>
     );
}

export default EnquiryForm;