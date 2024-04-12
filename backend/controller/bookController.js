import Book from '../model/bookModel.js'

export const getBooks = async (req, res) => {
    try{
        const books = await Book.find()
        res.status(200).json(books)
    } catch(error){
        res.status(404).json({message: "No books found"})
    }
}