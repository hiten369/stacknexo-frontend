import React from 'react'
import Aside from '../../../Aside/Aside'
import CreateAppModal from '../../../CommonElements/CreateAppModal'
import TwoFactorAuthentication from '../../../CommonWizards/TwoFactorAuthentication'
import Navbar from '../../../Navbar/Navbar'

const Wiz6 = (props) => {
	return (
		<>
			<Navbar setAlert={props.setAlert} encrypt={props.encrypt} />
			<Aside />
			<CreateAppModal setAlert={props.setAlert} />
			<TwoFactorAuthentication setAlert={props.setAlert} />
		</>
	)
}

export default Wiz6
