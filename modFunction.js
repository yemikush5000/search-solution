function sequentialSearch(searchData, searchText) {
    const parts = searchText.split(' ');
    // Assign the parts to variables
    const fname = parts[0];
    const lname = parts[1];
    // Output the results
    console.log('First Name:', fname);
    console.log('Last Name:', lname);
    var searchResult = [];
    var first_name = "first_name";
    var last_name = "last_name";
    for (let i = 1; i < searchData.length + 1; i++) {
        console.log(i);
        if (fname === searchData[i].first_name) {
            searchResult = searchResult + searchData[i]
        }
        else if (fname.slice(0,3) === searchData[i].first_name.slice(0,3)) {
            searchResult = searchResult + searchData[i]
        }
        else if ((fname === searchData[i].first_name) && (lname === searchData[i].last_name)) {
            searchResult = searchResult + searchData[i]
        }
        else {
            console.log("Please enter your search text")
        }
    }
return searchResult;
}









