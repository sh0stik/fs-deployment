const btn = document.querySelector('button')

const clickHandler = () => {
    axios.get('/api/cat')
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
}

btn.addEventListener('click', clickHandler)
