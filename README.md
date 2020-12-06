# Employees csv node

## Requirements
- express

To get it, run:
```
npm i express
```
## Parameters

- employeeId (Required)
- employeeAttr (Optional)

## How it works?

Execute:
```
node server.js
```

Then, go to:
```
http://localhost:3000/employee/<employeeId>/<employeeAttr>
```
## Example

Command:

```
node server.js
```

[http://localhost:3000/employee/5](http://localhost:3000/employee/5)

Response:
```
{
id: '5',
first_name: 'Olenka',
last_name: 'De Mars',
email: 'odemars4@mac.com',
ip_address: '85.77.178.159'
}
```

Or

[http://localhost:3000/employee/5/first_name](http://localhost:3000/employee/5/first_name)

Response:

```
{ first_name: 'Olenka' }
```
