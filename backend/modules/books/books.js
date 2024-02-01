const booksController = require("./booksController")

class Books {

    async getAllBookCatCodes(req, res){
        try{
            const codes = await booksController.getAllBookCatCodes();
            res.send(codes)

        }catch(error){
            console.log(error)
        }
    }

    async getAllPublishers(req, res){
        try{
            const pubs = await booksController.getAllPublishers();
            res.send(pubs)
        }catch(error){
            console.log(error)
        }
    }

    async getAllAuthors(req, res){
        
        try{
            const authors = await booksController.getAllAuthors();
            res.send(authors)
        }catch(error){
            console.log(error)
        }
}

async insertNewBook(req, res){
    try{
        const response = await booksController.insertNewBook(req.body);
        res.send(response)

    }catch(error){
        console.log(error)
    }
}

async getAllBooks(req, res){
    try{
        const response = await booksController.getAllBooks();
        res.send(response)

    }catch(error){
        console.log(error)
    }
}

async getAuthorIdByAuthorName(req, res){
    try{
        
        const headersData = {
            name: req.params.authorName,
            enterBy: req.params.enterBy
        };
        
        const response = await booksController.getAuthorIdByAuthorName(headersData);
        res.send(response)
    }catch(error){
        console.log(error)
    }
}

}


module.exports = new Books();