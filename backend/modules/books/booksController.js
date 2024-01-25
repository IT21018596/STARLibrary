const { connect } = require('http2')
const connection = require('../../dbConnection')
const util = require('util')


const getAllBookCatCodes = async() => {
    const con = await connection.getConnection();
    try {
        const result = await con.request().query("SELECT CONCAT(cCatCode, ' ', cCatname) AS CatCodeAndName FROM LIB_Master_BookCats")

        console.log(result.recordset);
    return result.recordset;
        
    } catch (error) {
        console.error("Error executing query:", error);
    } finally {
       
        con.release();
    }

    

}

const getAllPublishers = async() => {
    const con = await connection.getConnection();
    try {
        const result = await con.request().query("SELECT   concat (nPublishersID, ' ',  cPublisherName) as pubIdAndName FROM LIB_Master_Publishers")

        
    return result.recordset;
        
    } catch (error) {
        console.error("Error executing query:", error);
    } finally {
       
        con.release();
    }

}

const getAllAuthors = async() => {
    const con = await connection.getConnection();
    try {
        const result = await con.request().query("SELECT  concat (nAuthorID, ' ',  cAuthorsName) as authIdAndName FROM  LIB_Master_Authors")

        
    return result.recordset;
        
    } catch (error) {
        console.error("Error executing query:", error);
    } finally {
       
        con.release();
    }

}

const insertNewBook = async(book, file) => {
    console.log("insernt new book controller hit")
    console.log(book)
    
    const con = await connection.getConnection();
    const res = await con.request()
    .input("cCatCode", book.catCode)
    .input("nPublishersID", book.pubId)
    .input("nAuthorID", book.authId)
    .input("cBookName", book.bookName)
    .input("cEditionNo", book.editionNo)
    .input("cEdition", book.edition)
    .input("cISBN", book.isbn)
    .input("cTranslater", book.translator)
    .input("cRemarks", book.remarks)
    .input("cCoverFront", book.coverFront)
    .input("cCoverBack", book.backCover)
    .input("cContentPage", book.contentPage)
    .input("cTranstationOf", book.translationOf)
    .input("cEnterBy", book.enterBy)
    .input("frontImage", file.path)
    
    .execute("ADD_LIB_Books");
    return res;
    
}

const getAllBooks = async() => {
    const con = await connection.getConnection();
    try {
        const result = await con.request().query("SELECT  * FROM  LIB_Master_Books")

        
    return result.recordset;
        
    } catch (error) {
        console.error("Error executing query:", error);
    } finally {
       
        con.release();
    }

}

const addNewAuthor = async(author) => {
    const con = await con.getConnection();
    try{
        const response = await con.request()
        .input("nAuthorID", author.id)
        .input("cAuthorsName", author.name)
        .input("cAuthorOtherName", author.otherName)
        .input("dEnterDate", author.enterDate)
        .input("cEnterBY", author.enterBy)
        .input("cEditBy", author.editBy)
        .input("deditDate", author.editDay)

    }catch(error){
        console.log(error)
    }
}


module.exports= {   
    getAllBookCatCodes,
    getAllPublishers,
    getAllAuthors,
    insertNewBook,
    getAllBooks,
    addNewAuthor
}