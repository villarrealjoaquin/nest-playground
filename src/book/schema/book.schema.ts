import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Book>

@Schema()
export class Book {
  @Prop({ require: true, unique: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);