import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { BookService } from "./Book.service";
import { CreateBook } from "./dto/book.dto";

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) { }

  @Get()
  getAllBooks() {
     return this.bookService.find();
  }

  @Get(':id')
  getBook(@Param('id') id: string) {
    return this.bookService.getBook(id);
  }

  @Post()
  createBook(@Body() body: CreateBook) {
    return this.bookService.createBook(body);
  }

  @Patch(':id')
  updateBook(@Param('id') id:string, @Body() fields: any) {
    this.bookService.updateBook(id, fields);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    this.bookService.deleteBook(id);
  }
}