/*Global Fetch*/
var update = document.getElementById('update')
var del = document.getElementById('delete')

update.addEventListener('click', function () {
    fetch('restaurants', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'name': 'Le Bernardin',
            'food': 4.9,
            'decor': 4.8,
            'service': 4.9,
            'michelin': 3

        })
    })
        .then(response => {
            if (response.ok) return response.json()
        })
        .then(data => {
            console.log(data)
        })
})

del.addEventListener('click', function () {
    fetch('restaurants', {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': 'Le Bernardin'
        })
    }).then(function (response) {
        window.location.reload()
    })
})