import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Resolver(of => User)
export class UsersResolver {
  constructor(private userService: UserService) {}

  @Query(returns => User, {description: 'Returns a user by id.'})
  async user(@Args('id', { type: () => Int}) id: number) {
    return {
      id: 1,
      email: '2'
    }
  }

  @Query(returns => User, {description: 'Returns the current logged in user.'})
  async me() {
    return {
      id: 2,
      email: 'me'
    }
  }
}