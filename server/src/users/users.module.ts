import { Module } from '@nestjs/common';
import { UserService } from './models/user.service';
import { UsersResolver } from './models/users.resolver';

@Module({
  providers: [UserService, UsersResolver]
})
export class UsersModule {}
