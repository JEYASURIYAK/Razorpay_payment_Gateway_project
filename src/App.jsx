import { useState } from 'react';
import './App.css';

function App() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(amount === ""){
      alert('Enter Amount!..')
    }else{
      var options = {
        key : "rzp_test_xf90OY3EHXFT8Z",
        key_secret : "Gei1KJd4FXkoYmtmQNjnoTtE",
        amount : amount * 100,
        currency : "INR",
        name : "Payments-projects",
        description : "This is for Testing Purpose",
        handler : function(response){
          alert(response.razorpay_payment_id)
        },
        prefill : {
          name : "JEYASURIYA",
          email : "jeyasuriya@gmail.com",
          contact : "8967452301"
        },
        notes : {
          address : "Razorpay Corporate Office"
        },
        theme : {
          color : "#3333cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }

  }
  return (
    <div className="App">
      <div className="container text-center">
        <h1 className='p-3'>Razorpay Payment Gateway Application </h1>
        <div className="container d-flex flex-column p-3 w-25">
          <div className="row p-2 justify-content-center">
              <input type="text" className='p-1' value={amount} onChange={(e) => {setamount(e.target.value)}} placeholder='Enter Your Amount..' />
          </div>
          <div className="row justify-content-center">
              <button className='w-50 p-1 border-1' onClick={handleSubmit} >Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
