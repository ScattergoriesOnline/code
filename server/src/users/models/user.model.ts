import { Field, Int, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class User {
  @Field(type => Int, {description: 'The unique id of the user.'})
  id: number;

  @Field(type => String, {description: 'The email address of the user.'})
  email: string;
}