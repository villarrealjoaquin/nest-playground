import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateBook, updateBook } from "./dto/book.dto";
import { Book } from "./schema/book.schema";

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private readonly bookModel: Model<Book>) { }

  async find() {
    return this.bookModel.find();
  }

  async getBook(id: string) {
    return this.bookModel.findById(id);
  }

  async createBook(book: CreateBook) {
    return this.bookModel.create(book);
  }

  async deleteBook(id: string) {
    return this.bookModel.findByIdAndDelete(id);
  }

  async updateBook(id: string, fields: Partial<updateBook>) {
    return this.bookModel.findByIdAndUpdate(id, { fields });
  }
}