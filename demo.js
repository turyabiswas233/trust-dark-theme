
const btn = document.getElementById("btn-submit")
btn.addEventListener("click", myFunc)
// function design
async function myFunc(e) {
    e.preventDefault()

    await fetch("http://demolink.json").then((res) => {
        return {
            data: res.body
        }
    })
}


// array+ object design
const myObjArr = [
    {
        name: 'user1',
        age: 19,
        foods: ['apple', 'mangoe', 'lichi']
    },
    {
        name: 'user1',
        age: 19,
        foods: ['apple', 'mangoe', 'lichi']
    },
    {
        name: 'user1',
        age: 19,
        foods: ['apple', 'mangoe', 'lichi']
    }
]

console.log(myObjArr);