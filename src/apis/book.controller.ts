import { Body, Controller, Delete, Get, HttpStatus, Post, Query } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'
import { Response } from 'src/common/Response'
import { BookService } from './book.service'
import { CreateBookDto } from './dtos/create-book.dto'

@ApiBearerAuth()
@ApiTags('Book APIs')
@Controller('')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('/book')
  @ApiOperation({ summary: 'Create a new book' })
  @ApiResponse({ status: 201, description: 'Create book successfully' })
  create(@Body() payload: CreateBookDto): Response {
    return new Response(
      HttpStatus.CREATED,
      'Create book succesfully.',
      this.bookService.create(payload)
    )
  }

  @Get('/book')
  @ApiOperation({ summary: 'Get book with provide identify' })
  @ApiResponse({ status: 200, description: 'Get book successfullly', type: Response })
  findOne(@Query('name') name: string): Response {
    return new Response(
      HttpStatus.OK,
      'Get book successfully.',
      this.bookService.findOne(name)
    )
  }

  // @Get('/books')
  // @ApiOperation({ summary: 'Get all books' })
  // @ApiResponse({ status: 200, description: 'Get all books successfully' })
  // findAll(): Response {
  //   return new Response(
  //     HttpStatus.OK,
  //     'Get all books successfully.',
  //     this.bookService.findAll()
  //   )
  // }

  // @Delete('/book')
  // @ApiOperation({ summary: 'Delete book with provided name' })
  // @ApiResponse({ status: 200, description: 'Delete book successfullly', type: Response })
  // delete(@Query('name') name: string): Response {
  //   return new Response(
  //     HttpStatus.OK,
  //     this.bookService.delete(name)
  //   )
  // }
}