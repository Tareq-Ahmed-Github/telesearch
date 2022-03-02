document.getElementById('error-message').style.display = 'none';

const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    if (searchText == '') {
        searchResult.textContent = 'No result found';
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        // console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => display(data.data))
        // .catch(error => displayError(error));
    }

}
// searchPhone();

const display = phones => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (phones.length == 0) {
        searchResult.textContent = 'No result found';
    }
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadData(${phone.idphone})" class="card h-100 p-5">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">Brand: ${phone.brand}</p>
                    <button onclick="loadData(${phone.slug})" type="button" class="btn btn-primary">Show more</button>
                </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

// const loadData = slug => {
//     // console.log(phoneId);
//     const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayphoneDetail(data.mainFeatures));

// }

// const displayphoneDetail = phone => {
//     console.log(phone);
//     const phoneDetails = document.getElementById('phone-details');
//     const div = document.createElement('div');
//     div.classList.add('card');
//     div.innerHTML = `
//             <img src="${phone.image}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${phone.slug}</h5>
//                 <p class="card-text">${phone.mainFeatures.slice(0, 150)}</p>
//         <a href="${phone.others}" class="btn btn-primary">Go somewhere</a>
//             </div >
//     `;
//     phoneDetails.appendChild(div);
// }