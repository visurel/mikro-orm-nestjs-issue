import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// START AFFECTING CODE
// When removing this part, the issue is gone
import { Entity, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Test {
  @PrimaryKey()
  id!: number;
}
// END AFFECTING CODE

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
