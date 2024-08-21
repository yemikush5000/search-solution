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
        const fname = parts[0];
        const lname = parts[1];

        console.log('First Name:', fname);
        console.log('Last Name:', lname);
        

        let searchResult = [];

        for (let i = 0; i < searchData.length; i++) { // Start at index 0
            if (fname === searchData[i].first_name) {
                searchResult.push(searchData[i]); // Add the object to the array
            } else if (fname.slice(0, 3) === searchData[i].first_name.slice(0, 3)) {
                searchResult.push(searchData[i]); // Add the object to the array
            } else if ((fname == searchData[i].first_name) && (lname == searchData[i].last_name)) {
                searchResult.push(searchData[i]); // Add the object to the array
            }
        }

        if (searchResult.length === 0) {
            console.log("No matches found.");
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
    },
    {
        "id": 3,
        "first_name": "Ardelle",
        "last_name": "Soames",
        "email": "asoames2@google.it", 
        "gender": "Female"
    },
    {
        "id": 4, 
        "first_name":"Kalila", 
        "last_name":"Tennant", 
        "email":"ktennant3@phpbb.com", 
        "gender":"Female"
    },
    {
        "id":5, 
        "first_name":"Veda", 
        "last_name":"Emma", 
        "email":"vemma4@nature.com", 
        "gender":"Female"
    },
    {
        "id":6, 
        "first_name":"Pauli", 
        "last_name":"Isacke", 
        "email":"pisacke5@is.gd", 
        "gender":"Female"
    },
    {
        "id":7, 
        "first_name":"Belita", 
        "last_name":"Ruoff", 
        "email":"bruoff6@wiley.com", 
        "gender":"Female"
    },
    {
        "id":8, 
        "first_name":"James", 
        "last_name":"Kubu", 
        "email":"hkubu7@craigslist.org",
        "gender":"Male"
    },
    {
        "id":9, 
        "first_name":"Jasen", 
        "last_name":"Jiroudek", 
        "email":"jjiroudek8@google.it", 
        "gender":"Polygender"
    },
    {"id":10, 
        "first_name":"Gusty", 
        "last_name":"Tuxill", 
        "email":"gtuxill9@illinois.edu", 
        "gender":"Female"
    },
    {
        "id":11, 
        "first_name":"James", 
        "last_name":"Pfeffer", 
        "email":"bpfeffera@amazon.com", 
        "gender":"Male"
    },
    {
        "id":12, 
        "first_name":"Mignonne", 
        "last_name":"Whitewood", 
        "email":"mwhitewoodb@godaddy.com", 
        "gender":"Female"

    },
    {
        "id":13, 
        "first_name":"Moselle", 
        "last_name":"Gaize", 
        "email":"mgaizec@tumblr.com", 
        "gender":"Female"
    },
    {
        "id":14, 
        "first_name":"Chalmers", 
        "last_name":"Longfut", 
        "email":"clongfujam@wp.com", 
        "gender":"Male"
    },
    {
        "id":15, 
        "first_name":"Linnell", 
        "last_name":"Jumont", 
        "email":"ljumonte@storify.com", 
        "gender":"Female"
    },
    {
        "id":16, 
        "first_name":"Viole", 
        "last_name":"Eaglen", 
        "email":"veaglenf@nytimes.com", 
        "gender":"Female"
    },
    {
        "id":17, 
        "first_name":"Sileas", 
        "last_name":"Tarr", 
        "email":"starrg@telegraph.co.uk", 
        "gender":"Female"
    },
    {
        "id":18, 
        "first_name":"Katey", 
        "last_name":"Soltan", 
        "email":"ksoltanh@simplemachines.org", 
        "gender":"Female"

    }

];
