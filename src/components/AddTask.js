import {useState} from 'react'

const AddTask =({onAdd}) =>{
	const [name,setName]=useState('')
	const [status,setStatus]=useState(false)
	const onSubmit =(e)=>{
		e.preventDefault()
		if(!name){
			alert('Please enter data')
			return
		}
		
		onAdd({name,status})

		setName('')
		setStatus(false)
	}
	return(
		<form className='add-form' onSubmit={onSubmit}>
			<div className='form-control'>
				<label> Name of the patient</label>
				<input
					type='text'
					placeholder='Name'
					value={name}
					onChange={(e)=>setName(e.target.value)}
				/>
			</div>
			<div className='form-control'>
				<label> Status of the patient</label>
				<input
					type='checkbox'
					checked={status}
					value={status}
					onChange={(e)=>setStatus(e.currentTarget.checked)}
				/>
			</div>
			<input type='submit' value={`Save patient's data`}
				   className='btn btn-block'/>
		</form>
		)
}

export default AddTask