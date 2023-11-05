import { Module } from "@nestjs/common";
import { BookController } from "./Book.controller";
import { BookService } from "./Book.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Book, BookSchema } from "./schema/book.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name:Book.name ,schema: BookSchema }])],
  controllers: [BookController],
  providers: [BookService],
})

export class BookModule {};