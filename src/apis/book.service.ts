import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common'
import { Response } from 'src/common/Response'
import { CreateBookDto } from './dtos/create-book.dto'
import { BookEntity } from './entities/book.entity'

@Injectable()
export class BookService {
  private readonly books: BookEntity[] = []

  create(payload: CreateBookDto): BookEntity {
    this.books.push(payload)

    return payload
  }

  findOne(name: string): BookEntity | object {
    let book = null

    if (this.books.length > 0) {
      for (const item of this.books) {
        if (item.name === name) {
          book = item
          break
        }
      }
    }

    if (book) return book;
    return {}
  }

  findAll(): BookEntity[] {
    return this.books
  }

  delete(name: string): string {
    if (this.books.length > 0) {
      let index = null as number | null

      for (let j = 0; j < this.books.length; ++j) {
        const item = this.books[j]

        if (item.name === name) {
          index = j
          break
        }
      }

      if (typeof index === 'number') {
        this.books.splice(index, 1)
        
        return 'Delete book successfully'
      } else {
        return 'Book with provided name does not exist'
      }
    }
    
    return 'Library does not have any books that we cannot delete this book with provided name'
  }
}