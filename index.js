import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET home page
app.get("/", (req, res) => {
    res.render("index.ejs", {});
});

// POST a search
app.post("/submit", (req, res) => {
    let searchText = req.body.searchText.trim();

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
        for (let i = 0; i < searchData.length; i++) {
            console.log(i);
            if (fname === searchData[i].first_name) {
                //searchResult = searchResult + searchData[i]
                searchResult.push(searchData[i]);
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

    let foundName = sequentialSearch(searchData, searchText);
    res.send(foundName); // Sends the result back to the client
});

app.listen(port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
});

// Sample search data
const searchData = [
    {
        "id": 1,
        "first_name": "Antony",
        "last_name": "Fitt",
        "email": "afitt0@a8.net",
        "gender": "Male"
    },
    {
        "id": 2,
        "first_name": "Katey",
        "last_name": "Gaines",
        "email": "kgaines1@bbb.org",
        "gender": "Female"
    }
];
