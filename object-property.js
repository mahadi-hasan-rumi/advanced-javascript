const students = [
    {id: 21, name: 'omar sunny'},
    {id: 31, name: 'manna'},
    {id: 41, name: 'moyuri'},
    {id: 51, name: 'depjol'}
]

const name = students.map(x => x.name);
console.log(name)

const ids = students.map(x => x.id);
console.log(ids)


const bigger = students.filter(x=>x.id>31)
console.log(bigger)

const biggerOne = students.find(c=>c.id>21);
console.log(biggerOne)