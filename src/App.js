import React, { useState } from 'react';
import data from './data';
function App() {
  const [paragraph,setParagraph] = useState([])
  const [amount,setAmount] = useState(0)
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    let amt = parseInt(amount);
    if (amount <= 0) {
      amt = 1;
    }
    if (amount > 8) {
      amt = 8;
    }
    setParagraph(data.slice(0,amt))
  }
  return <section className="section-center">
    <h3>Lorem ipsum generator</h3>
    <p>Note: upto 8 paragraphs</p>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {paragraph.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
  </section>
}

export default App;
