import { v4 as uuidv4 } from 'uuid';

export default class User {
	constructor(
		firstname = 'Anonymous',
		lastname = 'Anonymous',
		email,
		password
	) {
		this.id = uuidv4(); // unique id manually
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
	}
}
