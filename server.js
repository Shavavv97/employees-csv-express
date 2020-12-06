const express = require('express')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000

app.get('/employee/:id/:attr?', function (req, res) {
	fs.readFile('./data/employees.csv', 'utf8', function (err, data) {
		const id = req.params.id
		const attr = req.params.attr

		if (err) {
			return res.status(500).send({
				msg: err.message
			});
		}

		const titles = data.slice(0, data.indexOf("\n")).split(",");
		const rows = data.slice(data.indexOf("\n") + 1).split("\n");

		let employees = rows.map((row) => {
			const values = row.split(",");
			return titles.reduce(
				(object, curr, i) => ((object[curr] = values[i]), object), {}
			);
		});

		let employeesId = employees.filter((employee) => employee.id == id);

		if (employeesId == "") {
			return res.status(400).send({
				msg: 'You have to send a valid ID'
			})
		}

		if (attr) {
			if (attr in employeesId[0]) {
				return res.status(200).send({
					[attr]: employeesId[0][attr]
				});
			}

			return res.status(400).send({
				msg: 'There is no such attribute'
			})
		}

		res.send(employeesId[0])
	})
})


app.listen(port, () => {
	console.log(`Running on port:${port}`)
})