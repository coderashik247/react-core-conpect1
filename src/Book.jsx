import './Book.css'

export default function Book({book}){
    console.log(book)
    const {name, teacherName} = book
    console.log(teacherName)
    return(
        <div className="book">
            <h3>Book Name: {name}</h3>
            <p>Book Price: {teacherName}</p>
        </div>
    )
}