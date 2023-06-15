const url = 'http://localhost:3000/users/';

const getUsuarios = () => {
	axios
		.get(url)
		.then((res) => {
			const users = res.data.users;
			let table = '<table border="1">';
			console.log(users);
			users.forEach((user) => {
				table +=
					'<tr>' +
					`<td>${user.id}</td>` +
					`<td>${user.name}</td>` +
					`<td>${user.email}</td>` +
					`<td>${user.age}</td>` +
					`<td>${user.comments}</td>` +
					'</tr>';
			});
			table += '</table>';
			document.querySelector('#resultado').innerHTML = table;
		})
		.catch((e) => console.log(e));
};

const createUsuario = () => {
	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const age = document.querySelector('#age').value;
	const comments = document.querySelector('#comments').value;
	console.log('create');
	axios
		.post(url, {
			name: name,
			email: email,
			age: age,
			comments: comments,
		})
		.then((res) => {
			console.log(res);
		})
		.catch((e) => console.log(e));
};
