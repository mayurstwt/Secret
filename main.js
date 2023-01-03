// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '53b45dde44msh988621bfe0fd7bap14d117jsn9644dd505262',
//         'X-RapidAPI-Host': 'papi-pornstarsapi.p.rapidapi.com'
//     }
// };

// fetch('https://papi-pornstarsapi.p.rapidapi.com/pornstars/', options)

//     .then(response => response.json())
//     .then(response => {
//         const list = response.results;

//         list.map((item) => {

//             const list1 = item.images;

//             list1.map((item1) => {

//                 console.log(item1.image_link);

//                 const photo = item1.image_link;

//                 const movie = `<img src="${photo}" >`

//                 document.querySelector('.movies').innerHTML += movie;

//             })


//         })


//     })
//     .catch(err => console.error(err));



const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fc4e5c746emsh1042b78698e4d4bp195acajsn49d7df1d2a7e',
        'X-RapidAPI-Host': 'quality-porn.p.rapidapi.com'
    }
};

fetch('https://quality-porn.p.rapidapi.com/search?query=milf&quality=hd&page=2&timeout=5000', options)
    .then(response => response.json())
    .then(response => {
        const list = response.data;


        // console.log(list)

        list.map((item) => {

            const list1 = item.links;

            list1.map((item1) => {

                console.log(item1.image);

                const photo = item1.image;

                 const url = item1.url;
        
                 const title = item1.title;

                const movie = `<a href="${url}"><img src="${photo}" ></a> <h1>"${title}"</h1>`

                document.querySelector('.movies').innerHTML += movie;

            })


        })


    })
    .catch(err => console.error(err));