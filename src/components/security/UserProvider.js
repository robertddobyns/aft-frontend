import {useState, createContext, useMemo, useEffect} from 'react';

const UserContext = createContext(null);

const UserProvider = (props) => {
	const [user, setUser] = useState('');
	const value = useMemo(() => ({ user, setUser }), [user])
	
	useEffect(() => {
		const getLoginInfo = () => {
			if(!user) {
				const username = localStorage.getItem('username')
				const token = localStorage.getItem('userToken')
				const userRole = localStorage.getItem('userRole')
				
				if(username && token && userRole) {
					setUser({
						username: username,
						token: token,
						userRole: userRole
					})
				}
			}
		}
		getLoginInfo()
	})
	
	
	return (
		<UserContext.Provider
			value={value}
		>
			{props.children}
		</UserContext.Provider>
	);
}
export {UserContext, UserProvider};