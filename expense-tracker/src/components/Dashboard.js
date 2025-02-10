import React, { useState } from 'react'
import img from '../asset/img/image.jpeg'
import del from '../asset/img/bin.jpeg'
import edit from '../asset/img/edit.jpeg'
import { Link, useNavigate } from 'react-router-dom'
function Dashboard() {
    const myExpenses = [100,200,300,400,500,600];

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({})
    const [showdata, setShowData] = useState(false)
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const addExpense = (event) => {
        event.preventDefault();
        console.log("clicked", inputs);
        setShowData(true)

    }


    return (
        <div className='container'>
            {showdata ?
                <div className='leftcontainer'>
                    <p>Total Expenses: 1000</p>
                    <div style={{backgroundImage: 'linear-gradient(#e9defa, #fbfcdb)',width:'100%',overflowY:'scroll',marginBottom:'80px',justifyContent:'center',justifyItems:'center',padding:'20px'}}>
                    {myExpenses.map((val) => 
                    <div className='expenseCard'>
                        <div style={{width:'100%', display:'flex' ,flexDirection:'row',justifyContent:'flex-end'}}>
                        <img style={{width:'20px',height:'20px'}} src={edit} />
                        <img style={{width:'20px',height:'20px',marginLeft:"4px"}} src={del} />
                        </div>
                        <p>Title</p>
                        <p>Amount : {val}</p>
                        <p>Date</p>
                        <p>Type</p>
                        
                    </div>
                    )}
                    </div>
                </div>
                :
                <div className='leftcontainer'>
                    <p>Please add your Expenses</p>
                    <img src={img} />
                </div>
            }
            
            <div className='rightcontainer'>
                <div className='formcard'>
                    <div>
                        <h2 style={{ alignSelf: 'center' }}>Add Expense</h2>
                    </div>
                    <form onSubmit={addExpense}>
                        <div>
                            <label>
                                Title
                            </label>
                            <input required
                                type="text"
                                placeholder='Enter your Expense title'
                                value={inputs.title || ''}
                                onChange={handleChange}
                                name='title'
                            />
                        </div>
                        <div>
                            <label>
                                Amount
                            </label>
                            <input required
                                type="number"
                                placeholder='Enter your Expense amount'
                                value={inputs.expense || ''}
                                onChange={handleChange}
                                name='expense'
                            />
                        </div>
                        <div>
                            <label>
                                Type
                            </label>
                            <select
                                value={inputs.type || ''}
                                onChange={handleChange}
                                name='type'
                            >
                                <option value="card">Card</option>
                                <option value="cash">Cash</option>
                                <option value="upi">Upi</option>
                            </select>
                        </div>
                        <div>
                            <label>
                                Date
                            </label>
                            <input required
                                type="date"
                                placeholder='Enter Date'
                                value={inputs.date || ''}
                                onChange={handleChange}
                                name='date'
                            />
                        </div>

                        <div>
                            <button>Add</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Dashboard