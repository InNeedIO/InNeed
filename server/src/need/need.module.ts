import { Module } from "@nestjs/common";
import { NeedModuleBase } from "./base/need.module.base";
import { NeedService } from "./need.service";
import { NeedController } from "./need.controller";
import { NeedResolver } from "./need.resolver";

@Module({
  imports: [NeedModuleBase],
  controllers: [NeedController],
  providers: [NeedService, NeedResolver],
  exports: [NeedService],
})
export class NeedModule {}
