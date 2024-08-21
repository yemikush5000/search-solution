import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use{bodyParser.urlencoded{{ extended: true}}};
app.use{express.static{"public"}};
// GET home page
app.get("/", (req, res) => {
    res.render("index.ejs", {});
}
)
//POST a search
app.post("/submit", (req, res) => {
    let searchText= req.body.searchText.trim()
    function sequentialSearch(searchData, searchText) {
        var pos = 0;
        var found = False;
        while (pos < searchData.length && !found){
            var foundName = []
            var firstSearch = searchData[pos].first_name;
            if (searchText == firstSearch) {
                foundName = foundname.append(firstSearch)
                found = true
            }   
            else (){
                pos+=1
            }
        return 

    }}
)
}
app.listen(port, () => {
    console.log(`Server is running on at http://127.0.0.1:${port}`)
});
var searchData = [
    {"id":1, 
    "first_name":"Antony", 
    "last_name":"Fitt", 
    "email":"afitt0@a8.net", 
    "gender":"Male" },
    {"id":2, 
    "first_name":"Katey",
    "last_name":"Gaines",
    "email":"kgaines1@bbb.org",
    "gender":"Female"},
]